// Rule-based scoring
function computeRuleScore(offer, lead) {
  let score = 0;
  const reasons = [];

  const role = (lead.role || "").toLowerCase();
  if (role.includes("head") || role.includes("vp") || role.includes("chief") || role.includes("ceo")) {
    score += 20;
    reasons.push("decision-maker (+20)");
  } else if (role.includes("manager") || role.includes("lead")) {
    score += 10;
    reasons.push("influencer (+10)");
  } else {
    reasons.push("other role (+0)");
  }

  if ((lead.industry || "").toLowerCase().includes((offer.ideal_use_cases[0] || "").toLowerCase())) {
    score += 20;
    reasons.push("exact ICP (+20)");
  }

  if (lead.name && lead.role && lead.company && lead.industry && lead.location && lead.linkedin_bio) {
    score += 10;
    reasons.push("all fields present (+10)");
  }

  return { score, reason: reasons.join("; ") };
}

module.exports = { computeRuleScore };
