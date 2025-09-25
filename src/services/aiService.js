const axios = require("axios");

async function classifyWithAI(offer, lead) {
  if (!process.env.OPENAI_API_KEY) {
    return { intent: "Medium", explanation: "AI not configured" };
  }

  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a B2B intent classifier. Return JSON with {intent, explanation} only." },
          { role: "user", content: JSON.stringify({ offer, lead }) }
        ],
      },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    );

    const msg = res.data.choices[0].message.content.trim();
    return JSON.parse(msg);
  } catch (err) {
    console.error("AI error:", err.message);
    return { intent: "Medium", explanation: "AI failed" };
  }
}

module.exports = { classifyWithAI };
