//import model
const Post = require("../models/contactModel");
const Comment = require("../models/loginModel");

//business logic 

exports.logIn = async (req, res) => {
    try{
        //fetch data from req body 
        const {post, user, body} = req.body;
        //create a comment object
        const login = new Login({
            post,user,body
        });

        //save the new comment into the database
        const savedLogin = await login.save();

        //find the post by ID, add the new commnet to its comments array
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true}  )
                            .populate("login") //populate the comments array with comment documents
                            .exec();

        res.json({
            post: udpatedPost,
        });

    }
    catch(error) {
        return res.status(500).json({
            error: "Error While Creating comment" ,
        });
    }
};