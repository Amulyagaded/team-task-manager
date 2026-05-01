import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/test")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend Running ✅</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
