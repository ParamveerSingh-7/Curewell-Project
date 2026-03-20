import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        background: "#111",
        padding: "15px 40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#fff", marginRight: "40px" }}>CureWell</h2>

      <div>
        <Link style={link} to="/">
          Doctors
        </Link>
        <Link style={link} to="/specializations">
          Specializations
        </Link>
        <Link style={link} to="/surgeries">
          Today’s Surgery
        </Link>
        <Link style={link} to="/add-doctor">
          Add Doctor
        </Link>
        <Link style={link} to="/add-surgery">
          Add Surgery
        </Link>
      </div>
    </div>
  );
}

const link = {
  color: "#fff",
  marginRight: "20px",
  textDecoration: "none",
  fontWeight: "500",
};
