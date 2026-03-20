const db = require("../config/db");

exports.getDoctors = (req, res) => {
  db.query("SELECT * FROM Doctor", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.addDoctor = (req, res) => {
  const { doctorName } = req.body;

  if (!doctorName) {
    return res.status(400).json({ msg: "Name is required" });
  }

  db.query(
    "INSERT INTO Doctor (doctorName) VALUES (?)",
    [doctorName],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ status: true, msg: "Doctor successfully added" });
    }
  );
};

exports.updateDoctor = (req, res) => {
  const { doctorName } = req.body;

  if (!doctorName) {
    return res.status(400).json({ msg: "Name is required" });
  }

  db.query(
    "UPDATE Doctor SET doctorName=? WHERE doctorId=?",
    [doctorName, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ status: true });
    }
  );
};

exports.deleteDoctor = (req, res) => {
  db.query("DELETE FROM Doctor WHERE doctorId=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ status: true });
  });
};
