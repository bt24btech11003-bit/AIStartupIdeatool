const mongoose = require("mongoose");

const validationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    idea: {
        type: String,
        required: true,
    },

    agents: {
        investor: String,
        customer: String,
        competitor: String,
    },

    verdict: {
        type: String,
        required: true,
    },

    roadmap: {
    type: String
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Validation", validationSchema);