const { askAI } = require("./aiService");

const synthesizerPrompt = (
    idea,
    investor,
    customer,
    competitor
) => `
You are a startup mentor synthesizing feedback from 3 experts on this idea: "${idea}"

Investor said:
${investor}

Customer said:
${customer}

Competitor said:
${competitor}

Respond in EXACTLY this format, no extra text:
MARKET DEMAND: [X/20]
REVENUE POTENTIAL: [X/20]
COMPETITION: [X/20]
SCALABILITY: [X/20]
EXECUTION: [X/20]
TOTAL SCORE: [X/100]

STRENGTH 1:
STRENGTH 2:
STRENGTH 3:

FATAL FLAW 1:
FATAL FLAW 2:
FATAL FLAW 3:

FIX 1:
FIX 2:
FIX 3:
`;

const synthesizerAgent = async (
    idea,
    investor,
    customer,
    competitor
) => {
    const result = await askAI(
        synthesizerPrompt(
            idea,
            investor,
            customer,
            competitor
        )
    );

    return result;
};

module.exports = {
    synthesizerAgent
};