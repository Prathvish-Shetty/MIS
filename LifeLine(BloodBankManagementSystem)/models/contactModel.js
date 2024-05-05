//import mongoose
const mongoose = require("mongoose");


//route handler
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {

        type: String,
        required: true,
    },
});




//export
module.exports = mongoose.model("Post", contactSchema);