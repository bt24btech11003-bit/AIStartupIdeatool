const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
    type: String,
    required: true,
},
validationCount: {
    type: Number,
    default: 0
},

lastValidationDate: {
    type: Date
}
})

const User = mongoose.model("User", userSchema);

module.exports = User;