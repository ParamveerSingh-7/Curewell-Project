import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateSurgery() {
  const { id } = useParams();

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleUpdate = async () => {
    if (!start || !end) {
      alert("Start and End time required");
      return;
    }

    if (parseFloat(start) >= parseFloat(end)) {
      alert("Start time must be less than end time");
      return;
    }

    await axios.put(`http://localhost:3001/api/surgeries/${id}`, {
      startTime: start,
      endTime: end,
    });

    alert("Updated successfully");
  };

  return (
    <div>
      <h2>Update Surgery</h2>

      <input
        placeholder="Start Time"
        onChange={(e) => setStart(e.target.value)}
      />
      <input placeholder="End Time" onChange={(e) => setEnd(e.target.value)} />

      <br />
      <br />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
