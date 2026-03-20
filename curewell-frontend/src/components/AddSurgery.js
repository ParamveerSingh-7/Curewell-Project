import { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

export default function AddSurgery() {
  const [form, setForm] = useState({
    doctorId: "",
    surgeryDate: "",
    startTime: "",
    endTime: "",
    surgeryCategory: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/doctors")
      .then((res) => setDoctors(res.data));

    axios
      .get("http://localhost:3001/api/specializations")
      .then((res) => setSpecializations(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const { doctorId, surgeryDate, startTime, endTime, surgeryCategory } = form;

    if (
      !doctorId ||
      !surgeryDate ||
      !startTime ||
      !endTime ||
      !surgeryCategory
    ) {
      setMsg("All fields are required");
      return;
    }

    if (parseFloat(startTime) >= parseFloat(endTime)) {
      setMsg("Start time must be less than end time");
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/surgeries", form);
      setMsg("Surgery added successfully");

      setForm({
        doctorId: "",
        surgeryDate: "",
        startTime: "",
        endTime: "",
        surgeryCategory: "",
      });
    } catch {
      setMsg("Some error occurred");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Surgery</h2>

        {/* Doctor Dropdown */}
        <select name="doctorId" value={form.doctorId} onChange={handleChange}>
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc.doctorId} value={doc.doctorId}>
              {doc.doctorName}
            </option>
          ))}
        </select>

        {/* Date */}
        <input
          type="date"
          name="surgeryDate"
          value={form.surgeryDate}
          onChange={handleChange}
        />

        {/* Start Time */}
        <input
          placeholder="Start Time (e.g. 14.00)"
          name="startTime"
          value={form.startTime}
          onChange={handleChange}
        />

        {/* End Time */}
        <input
          placeholder="End Time (e.g. 16.00)"
          name="endTime"
          value={form.endTime}
          onChange={handleChange}
        />

        {/* Category Dropdown */}
        <select
          name="surgeryCategory"
          value={form.surgeryCategory}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {specializations.map((spec) => (
            <option
              key={spec.specializationCode}
              value={spec.specializationCode}
            >
              {spec.specializationName}
            </option>
          ))}
        </select>

        <br />
        <br />

        <button className="btn-primary" onClick={handleSubmit}>
          Add Surgery
        </button>

        <p style={{ color: "red" }}>{msg}</p>
      </div>
    </div>
  );
}
