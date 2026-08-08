const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedpassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedpassword
        });

        res.status(201).json({
            message: "User Created Successfully",
            user
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const login = async (req, res) =>{
    const {email, password} = req.body;
    const user = await User.findOne({ email });

    if(!user){
        return res.status(404).json({
    message: "User not found"
    });
    }

    const ismatch = await bcrypt.compare(password, user.password);

    if(!ismatch){
        return res.status(401).json({
    message: "Invalid Password"
     });
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d"
    }
) 
   return res.status(200).json({message:"login sucessful", token})
}

module.exports = {
    signup, 
    login
};