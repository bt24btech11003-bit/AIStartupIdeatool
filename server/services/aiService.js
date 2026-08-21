const groq = require("../config/groq");

const askAI = async (prompt) => {

    const response = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [
    {
        role: "user",
        content: prompt
    }
    ]
    })

   return response.choices[0].message.content
};

module.exports = {
    askAI
};
