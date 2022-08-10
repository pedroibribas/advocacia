const express = require("express");
const { getPDF } = require("../controllers/pdfController");

const router = express.Router();

router.route("/").post(getPDF);

module.exports = router;