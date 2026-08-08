const { askAI } = require("./aiService");

const competitorPrompt = (idea) => `
You are an aggressive competitor who already exists in this space.
Analyze this startup idea: "${idea}"

Respond in EXACTLY this format, no extra text:
VERDICT: [One line - threat or not]
HOW I CRUSH THEM: [One line strategy]
THEIR WEAKNESS: [Single fatal flaw]
CAN THEY SURVIVE: [Yes/No and why in one line]
FEAR LEVEL: [X/10]
`;

const competitorAgent = async (idea) => {
    const result = await askAI(competitorPrompt(idea));
    return result;
};

module.exports = { competitorAgent };