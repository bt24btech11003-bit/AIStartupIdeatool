const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { signup, login } = require("../controller/authController");


router.post("/signup", signup);

router.post("/login", login);


module.exports = router;


module.exports = router;