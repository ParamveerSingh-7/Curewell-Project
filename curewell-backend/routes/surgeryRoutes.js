const express = require("express");
const router = express.Router();
const controller = require("../controllers/surgeryController");

router.get("/today", controller.getTodaySurgeries);
router.put("/:id", controller.updateSurgery);
router.post("/", controller.addSurgery);

module.exports = router;
