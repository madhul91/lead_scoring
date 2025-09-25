const express = require("express");
const router = express.Router();
const { scoreLeads, getResults, exportResults } = require("../controllers/scoreController");

router.post("/", scoreLeads);
router.get("/results", getResults);
router.get("/results/export", exportResults);

module.exports = router;
