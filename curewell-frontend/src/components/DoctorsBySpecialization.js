import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DoctorsBySpecialization() {
  const { code } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/specializations/${code}/doctors`)
      .then((res) => setDoctors(res.data));
  }, [code]);

  return (
    <div>
      <h2>Doctors for {code}</h2>

      {doctors.map((doc) => (
        <p key={doc.doctorId}>
          {doc.doctorId} - {doc.doctorName}
        </p>
      ))}
    </div>
  );
}
