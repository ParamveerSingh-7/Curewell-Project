const db = require("../config/db");

exports.getSpecializations = (req, res) => {
  db.query("SELECT * FROM Specialization", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.getDoctorsBySpecialization = (req, res) => {
  const code = req.params.code;

  db.query(
    `SELECT d.doctorId, d.doctorName
     FROM Doctor d
     JOIN DoctorSpecialization ds 
     ON d.doctorId = ds.doctorId
     WHERE ds.specializationCode=?`,
    [code],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};
