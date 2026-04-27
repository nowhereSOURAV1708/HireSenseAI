import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file || !jobDesc) {
      alert("Upload resume and enter job description");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_desc", jobDesc);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://127.0.0.1:8000/analyze/",
        formData
      );
      setResult(res.data.analysis);
    } catch (err) {
      alert("Backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>HireSenseAI 🚀</h1>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br /><br />

      <textarea
        rows="5"
        cols="40"
        placeholder="Paste Job Description..."
        onChange={(e) => setJobDesc(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Analyze</button>

      {loading && <p>Analyzing...</p>}

      {result && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
          <h3>Result</h3>
          {result}
        </div>
      )}
    </div>
  );
}

export default App;