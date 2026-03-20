import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles.css";
export default function ViewDoctors() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/doctors")
      .then((res) => setDoctors(res.data));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>View Doctors</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.doctorId}>
                <td>{doc.doctorId}</td>
                <td>{doc.doctorName}</td>
                <td>
                  <button
                    className="btn-primary"
                    onClick={() => navigate(`/update-doctor/${doc.doctorId}`)}
                  >
                    Edit
                  </button>

                  <button className="btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
