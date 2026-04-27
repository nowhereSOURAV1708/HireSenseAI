import faiss
import numpy as np
import requests
from pypdf import PdfReader
from sentence_transformers import SentenceTransformer

# ✅ FREE LOCAL MODEL
model = SentenceTransformer('all-MiniLM-L6-v2')


# --------- READ PDF ----------
def extract_text(file_path):
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    return text


# --------- VECTOR STORE ----------
def create_vector_store(text):
    chunks = [text[i:i+500] for i in range(0, len(text), 500)]

    embeddings = model.encode(chunks)

    dim = embeddings.shape[1]

    index = faiss.IndexFlatL2(dim)
    index.add(np.array(embeddings).astype("float32"))

    return index, chunks


# --------- SEARCH ----------
def search(index, chunks, query):
    query_embedding = model.encode([query])

    D, I = index.search(np.array(query_embedding).astype("float32"), k=3)

    return [chunks[i] for i in I[0]]


# --------- SIMPLE AI ANALYSIS (NO API) ----------


def analyze_resume(job_desc, resume_text):
    if not resume_text.strip():
        return "Resume not readable"

    index, chunks = create_vector_store(resume_text)
    context_chunks = search(index, chunks, job_desc)

    context = " ".join(context_chunks)

    prompt = f"""
You are an AI recruiter.

Analyze the resume against the job description.

Return:
- Match Score (0-100)
- Missing Skills
- Strong Points
- Final Verdict

Resume:
{resume_text}

Job Description:
{job_desc}

Relevant Context:
{context}
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3",
            "prompt": prompt,
            "stream": False
        }
    )

    return response.json()["response"]