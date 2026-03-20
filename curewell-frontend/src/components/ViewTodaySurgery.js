import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ViewTodaySurgery() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/surgeries/today")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Today's Surgeries</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Doctor</th>
              <th>Start</th>
              <th>End</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((s) => (
              <tr key={s.surgeryId}>
                <td>{s.surgeryId}</td>
                <td>{s.doctorId}</td>
                <td>{s.startTime}</td>
                <td>{s.endTime}</td>
                <td>{s.surgeryCategory}</td>
                <td>
                  <button
                    className="btn-primary"
                    onClick={() => navigate(`/update-surgery/${s.surgeryId}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
