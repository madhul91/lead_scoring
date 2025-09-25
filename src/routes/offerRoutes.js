const express = require("express");
const router = express.Router();
const { saveOffer } = require("../controllers/offerController");

router.post("/", saveOffer);

module.exports = router;
