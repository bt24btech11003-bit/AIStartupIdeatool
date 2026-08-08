const groq = require("../config/groq");

const askAI = async (prompt) => {

    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
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