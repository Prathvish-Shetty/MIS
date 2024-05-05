//import mongoose
const mongoose = require("mongoose");


//route handler
const signUpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
});




//export
module.exports = mongoose.model("SignUp", signUpSchema);