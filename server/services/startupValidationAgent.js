const { investorAgent } = require("./investorAgent");
const { customerAgent } = require("./customerAgent");
const { competitorAgent } = require("./competitorAgent");
const { synthesizerAgent } = require("./synthesizerAgent");
const { roadmapAgent } = require("./roadmapAgent");

const validateStartup = async (idea) => {

    // Run first 3 agents simultaneously
    const [
        investorFeedback,
        customerFeedback,
        competitorFeedback
    ] = await Promise.all([
        investorAgent(idea),
        customerAgent(idea),
        competitorAgent(idea)
    ]);

    // Combine all three responses
    const verdict = await synthesizerAgent(
        idea,
        investorFeedback,
        customerFeedback,
        competitorFeedback
    );

    const roadmap = await roadmapAgent(idea, verdict);

    // Return everything
    return {
        investor: investorFeedback,
        customer: customerFeedback,
        competitor: competitorFeedback,
        verdict,
        roadmap
    };
};

module.exports = {
    validateStartup
};