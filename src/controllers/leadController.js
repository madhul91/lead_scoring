const multer = require("multer");
const csv = require("csv-parser");
const stream = require("stream");

const upload = multer({ storage: multer.memoryStorage() });
let leads = [];

const uploadLeads = (req, res) => {
  if (!req.file) return res.status(400).json({ error: "CSV file required" });

  const leadsParsed = [];
  const bufferStream = new stream.PassThrough();
  bufferStream.end(req.file.buffer);

  bufferStream
    .pipe(csv())
    .on("data", (row) => leadsParsed.push(row))
    .on("end", () => {
      leads = leadsParsed;
      res.json({ uploaded: leads.length });
    });
};

const getLeads = () => leads;

module.exports = { upload, uploadLeads, getLeads };
