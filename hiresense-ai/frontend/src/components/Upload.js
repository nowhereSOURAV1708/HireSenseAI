import React, { useState } from "react";
import axios from "axios";

function Upload({ setResult, setLoading }) {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  const handleSubmit = async () => {
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
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <textarea
        placeholder="Job Description"
        onChange={(e) => setJobDesc(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
}

export default Upload;