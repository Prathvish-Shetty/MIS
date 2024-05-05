const express = require("express");
const router = express.Router();


//Import Controller

const {logIn} = require("../../controllers/loginController");
const {contactPost, getAllContacts} = require("../../controllers/contactController");
const {signUpPost,getAllSignUpPosts} = require("../../controllers/signUpController");



//Mapping Create

router.post("/Login", logIn);
router.post("/contact", contactPost);
router.post("/Signup",signUpPost);
router.get("/contacts", getAllContacts);
router.get("/signUps",getAllSignUpPosts);


//export
module.exports = router;
