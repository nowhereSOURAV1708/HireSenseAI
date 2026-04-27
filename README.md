# 🚀 HireSenseAI – AI Resume Screening System

HireSenseAI is an AI-powered resume screening system that analyzes resumes against job descriptions using Retrieval-Augmented Generation (RAG). It leverages modern AI techniques to evaluate candidates and provide insights such as match score, missing skills, and final verdict.

---

## 🔥 Features

* 📄 Upload Resume (PDF)
* 🧠 AI-based Resume Analysis
* 📊 Match Score Evaluation
* ❌ Missing Skills Detection
* ✅ Strong Points Identification
* ⚡ Fast and Interactive UI
* 🖥️ Fully Local AI (No API cost using Ollama)

---

## 🏗️ Tech Stack

### 🔹 Backend

* Python
* FastAPI
* FAISS (Vector Database)
* Sentence Transformers (Embeddings)
* Ollama (Local LLM – LLaMA 3)

### 🔹 Frontend

* React.js
* Axios
* CSS (Custom UI)

---

## 🧠 Architecture

User Input → React UI → FastAPI Backend →
Text Extraction → Embedding → FAISS Search →
Context Retrieval → LLM (Ollama) → Result Display

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/hiresense-ai.git
cd hiresense-ai
```

---

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

---

### 3️⃣ Install & Run Ollama

Download:
👉 https://ollama.com

Run model:

```bash
ollama run llama3
```

---

### 4️⃣ Run Backend

```bash
uvicorn main:app --reload
```

---

### 5️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🧪 Usage

1. Open browser → http://localhost:3000
2. Upload resume (PDF)
3. Enter job description
4. Click **Analyze**
5. View AI-generated insights

---

## 📊 Sample Output

* Match Score: 82%
* Strong Points: Relevant skills match
* Missing Skills: Advanced tools missing
* Final Verdict: Suitable candidate

---

## ⚠️ Limitations

* Basic chunking strategy
* Local LLM may be slower on low-end systems
* Embedding model can be improved

---

## 🚀 Future Improvements

* 📊 Score visualization (progress bar)
* 🥇 Multi-resume ranking
* 📥 Export report (PDF)
* 🌐 Cloud deployment
* 🔍 Better semantic search

---

## 👨‍💻 Author

**Sourav Sandilya**
📍 India
🔗 GitHub: https://github.com/nowhereSOURAV1708

---

## ⭐ Contribute

Feel free to fork, improve, and contribute!

---

## 📜 License

This project is open-source and available under the MIT License.
