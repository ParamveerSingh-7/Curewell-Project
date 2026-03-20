import { useState } from "react";
import axios from "axios";
import "../styles.css";

export default function AddDoctor() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    if (!name) {
      setMsg("Name is required");
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/doctors", {
        doctorName: name,
      });
      setMsg("Doctor successfully added");
      setName("");
    } catch {
      setMsg("Some error occurred");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add a New Doctor</h2>

        <div style={{ textAlign: "center" }}>
          <input
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="btn-primary" onClick={handleSubmit}>
            Add Doctor
          </button>

          <button className="btn-secondary">Cancel</button>
        </div>

        <p style={{ textAlign: "center", color: "red" }}>{msg}</p>
      </div>
    </div>
  );
}
