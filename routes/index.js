const express = require("express");
const router = express.Router();

const attendController = require("../controllers/attendance-controller");
const admin = require('./modules/admin')

router.use('/admin', admin)
router.get("/attendance", attendController.getAttendance);

router.use("/", (req, res) => res.redirect("/attendance"));

module.exports = router;
