const db = require("../config/db");

exports.getTodaySurgeries = (req, res) => {
  db.query(
    "SELECT * FROM Surgery WHERE DATE(surgeryDate)=CURDATE()",
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

exports.updateSurgery = (req, res) => {
  const { startTime, endTime } = req.body;

  if (!startTime || !endTime) {
    return res.status(400).json({ msg: "Start and End time required" });
  }

  if (parseFloat(startTime) >= parseFloat(endTime)) {
    return res.status(400).json({
      msg: "Start time must be less than end time",
    });
  }

  db.query(
    "UPDATE Surgery SET startTime=?, endTime=? WHERE surgeryId=?",
    [startTime, endTime, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ status: true, msg: "Updated successfully" });
    }
  );
};

exports.addSurgery = (req, res) => {
  const { doctorId, surgeryDate, startTime, endTime, surgeryCategory } =
    req.body;

  if (!doctorId || !surgeryDate || !startTime || !endTime || !surgeryCategory) {
    return res.status(400).json({
      msg: "All fields are required",
    });
  }

  if (parseFloat(startTime) >= parseFloat(endTime)) {
    return res.status(400).json({
      msg: "Start time must be less than end time",
    });
  }

  const query = `
      INSERT INTO Surgery 
      (doctorId, surgeryDate, startTime, endTime, surgeryCategory)
      VALUES (?, ?, ?, ?, ?)
    `;

  db.query(
    query,
    [doctorId, surgeryDate, startTime, endTime, surgeryCategory],
    (err) => {
      if (err) {
        return res.status(500).json({
          msg: "Some error occurred",
        });
      }

      res.json({
        status: true,
        msg: "Surgery added successfully",
      });
    }
  );
};
