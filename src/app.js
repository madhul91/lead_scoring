const express = require("express");
const app = express();

const offerRoutes = require("./routes/offerRoutes");
const leadRoutes = require("./routes/leadRoutes");
const scoreRoutes = require("./routes/scoreRoutes");

app.use(express.json());
app.use("/offer", offerRoutes);
app.use("/leads", leadRoutes);
app.use("/score", scoreRoutes);

module.exports = app;
