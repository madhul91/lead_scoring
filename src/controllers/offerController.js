let currentOffer = null;

const saveOffer = (req, res) => {
  if (!req.body.name) return res.status(400).json({ error: "Offer name required" });
  currentOffer = req.body;
  res.json({ status: "Offer saved" });
};

const getCurrentOffer = () => currentOffer;

module.exports = { saveOffer, getCurrentOffer };
