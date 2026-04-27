import React from "react";

function Result({ result }) {
  if (!result) return null;

  return (
    <div>
      <h2>Result</h2>
      <pre>{result}</pre>
    </div>
  );
}

export default Result;