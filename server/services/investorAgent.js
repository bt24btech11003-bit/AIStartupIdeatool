const { askAI } = require("./aiService");

const investorPrompt =  (idea) => `
You are a brutal but fair Silicon Valley investor with 20 years experience.
Analyze this startup idea: "${idea}"

Respond in EXACTLY this format, no extra text:
VERDICT: [One line brutal honest opinion]
MARKET: [One line on market size]
FUNDABILITY: [One line - would you fund or not]
KEY RISK: [Single biggest risk]
SCORE: [X/10]
`;


const investorAgent = async (idea) => {
const prompt = investorPrompt(idea);

const result = await askAI(prompt);

return result;
};

module.exports = {
    investorAgent
};