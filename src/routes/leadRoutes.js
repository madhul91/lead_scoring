const express = require("express");
const router = express.Router();
const { upload, uploadLeads } = require("../controllers/leadController");

router.post("/upload", upload.single("file"), uploadLeads);

module.exports = router;
