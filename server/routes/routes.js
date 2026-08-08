const express = require("express");
const {validateStartup} = require("../services/startupValidationAgent")
const { enhanceAgent } = require("../services/enhanceAgent");
const authMiddleware = require("../middleware/authMiddleware");
const Validation = require("../models/Validation");
const User = require("../models/User");
const { generatePDF } = require("../utils/pdfGenerator");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Backend is running...");
});


router.post("/validate", authMiddleware, async (req, res) => {
    const { idea } = req.body;
    if (!idea) {
    return res.status(400).json({
        message: "Startup idea is required"
    });
}

const user = await User.findById(req.user.id);
const today = new Date().toDateString();
const lastDate = user.lastValidationDate
    ? new Date(user.lastValidationDate).toDateString()
    : null;

    if (lastDate === today && user.validationCount >= 5) {
    return res.status(429).json({
        message: "Daily limit reached."
    });
}

if (lastDate !== today) {
    user.validationCount = 0;
}

user.validationCount += 1;

user.lastValidationDate = new Date();

await user.save();

const result = await validateStartup(idea);

const validation = await Validation.create({
    userId: req.user.id,

    idea,

    agents: {
        investor: result.investor,
        customer: result.customer,
        competitor: result.competitor,
    },

    verdict: result.verdict,

    roadmap: result.roadmap,

    
});



return res.status(200).json({
    ...result,
    validationId: validation._id,
    remaining: 5 - user.validationCount,
});

});

router.get("/history", authMiddleware, async (req, res) => {
    console.log("History route hit");
    const validations = await Validation.find({userId: req.user.id}).sort({createdAt: -1});

    return res.json(validations);

});



router.delete("/history/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const validation = await Validation.findById(id);

    if (!validation) {
    return res.status(404).json({
        message: "Validation not found"
    });
    }

    if (validation.userId.toString() !== req.user.id) {
        return res.status(403).json({
        message: "Access Denied"
    });
   }

   await Validation.findByIdAndDelete(id);

   res.json({
    message: "Validation deleted successfully"
});

});

router.get("/remaining", authMiddleware, async (req, res) => {

    const user = await User.findById(req.user.id);

    const today = new Date().toDateString();

    const lastDate = user.lastValidationDate
        ? new Date(user.lastValidationDate).toDateString()
        : null;

    let remaining = 5;

    if (lastDate === today) {
        remaining = 5 - user.validationCount;
    }

    res.json({
        remaining,
    });

});

router.post("/enhance", authMiddleware, async (req, res) => {

    try {

        const { idea } = req.body;

        if (!idea) {

            return res.status(400).json({
                message: "Idea is required",
            });

        }

        const enhancedIdea = await enhanceAgent(idea);

        res.json({

            enhancedIdea,

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Failed to enhance idea",

        });

    }

});

router.get("/report/:id", authMiddleware, async (req, res) => {
const { id } = req.params;

const validation = await Validation.findById(id);
if (!validation) {
    return res.status(404).json({
        message: "Validation not found"
    });
}

if (validation.userId.toString() !== req.user.id) {
    return res.status(403).json({
        message: "Access Denied"
    });
}

generatePDF(validation, res);
});

module.exports = router;