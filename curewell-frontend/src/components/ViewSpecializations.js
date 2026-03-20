import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ViewSpecializations() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/specializations")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>View Specializations</h2>

        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((spec) => (
              <tr key={spec.specializationCode}>
                <td>{spec.specializationCode}</td>
                <td>{spec.specializationName}</td>
                <td>
                  <button
                    className="btn-primary"
                    onClick={() =>
                      navigate(`/doctors/${spec.specializationCode}`)
                    }
                  >
                    View Doctors
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
