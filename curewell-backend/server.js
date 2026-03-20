const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/specializations", require("./routes/specializationRoutes"));
app.use("/api/surgeries", require("./routes/surgeryRoutes"));

app.get("/test", (req, res) => {
  res.send("Test working");
});

app.get("/", (req, res) => {
  res.send("CureWell API Running 🚀");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
