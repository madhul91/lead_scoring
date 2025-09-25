const os = require("os");
const { computeRuleScore } = require("../services/ruleService");
const { classifyWithAI } = require("../services/aiService");
const { getLeads } = require("./leadController");
const { getCurrentOffer } = require("./offerController");

let results = [];

const scoreLeads = async (req, res) => {
  const offer = getCurrentOffer();
  const leads = getLeads();

  if (!offer) return res.status(400).json({ error: "No offer uploaded" });
  if (!leads.length) return res.status(400).json({ error: "No leads uploaded" });

  results = [];
  for (const lead of leads) {
    const { score: ruleScore, reason } = computeRuleScore(offer, lead);
    const ai = await classifyWithAI(offer, lead);
    const aiPoints = ai.intent === "High" ? 50 : ai.intent === "Medium" ? 30 : 10;
    const finalScore = Math.min(100, ruleScore + aiPoints);
    results.push({ ...lead, intent: ai.intent, score: finalScore, reasoning: reason + " | " + ai.explanation });
  }

  res.json({ scored: results.length });
};

const getResults = (req, res) => res.json(results);

const exportResults = (req, res) => {
  const header = "name,role,company,industry,location,intent,score,reasoning" + os.EOL;
  const csvData = results
    .map((r) =>
      [r.name, r.role, r.company, r.industry, r.location, r.intent, r.score, r.reasoning]
        .map((v) => `"${String(v || "").replace(/"/g, '""')}"`)
        .join(",")
    )
    .join(os.EOL);
  res.setHeader("Content-Type", "text/csv");
  res.send(header + csvData);
};

module.exports = { scoreLeads, getResults, exportResults };
