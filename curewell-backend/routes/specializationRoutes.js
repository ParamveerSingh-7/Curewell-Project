const express = require("express");
const router = express.Router();
const controller = require("../controllers/specializationController");

router.get("/", controller.getSpecializations);
router.get("/:code/doctors", controller.getDoctorsBySpecialization);

module.exports = router;
