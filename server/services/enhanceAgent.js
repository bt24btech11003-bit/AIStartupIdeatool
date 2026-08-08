const { askAI } = require("./aiService");

const enhanceAgent = async (idea) => {

    const prompt = `
You are an expert startup mentor.

The user has the following startup idea:

"${idea}"

Your task is NOT to change the startup.

Instead:

• Make the description clearer.
• Add missing details.
• Improve the wording.
• Keep the original meaning.
• Make it sound like a professional startup pitch.

Return ONLY the improved startup idea.
Do not explain anything.
Do not use bullet points.
`;

    const result = await askAI(prompt);

    return result;

};

module.exports = {
    enhanceAgent,
};
