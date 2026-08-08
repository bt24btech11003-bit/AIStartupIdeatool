const { askAI } = require("./aiService");

const customerPrompt = (idea) => `
You are a potential customer who is smart and skeptical.
Analyze this startup idea: "${idea}"

Respond in EXACTLY this format, no extra text:
VERDICT: [One line - would you use it or not]
WOULD PAY: [Yes/No and how much]
MISSING: [One thing that would make you use it]
ANNOYS ME: [One thing that bothers you about it]
RATING: [X/10]
`;

const customerAgent = async (idea) => {
    const result = await askAI(customerPrompt(idea));
    return result;
};

module.exports = { customerAgent };