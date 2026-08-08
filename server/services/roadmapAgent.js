const { askAI } = require("./aiService");

const roadmapPrompt = (idea, verdict) => `
You are an experienced startup mentor.

Startup Idea:
"${idea}"

Validation Report:
${verdict}

Create a practical 3-month roadmap.

Respond EXACTLY in this format:

MONTH 1:
- Milestone 1
- Milestone 2
- Milestone 3

MONTH 2:
- Milestone 1
- Milestone 2
- Milestone 3

MONTH 3:
- Milestone 1
- Milestone 2
- Milestone 3

BIGGEST RISK:
[One line]

SUCCESS METRIC:
[One line]
`;

const roadmapAgent = async (idea, verdict) => {
    const result  = askAI(roadmapPrompt(idea, verdict));

    return result;
};

module.exports = {
    roadmapAgent
};