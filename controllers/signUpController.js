const Post = require("../models/signUpModel");

exports.signUpPost = async (req,res) => {
    try{
            const {email,password,cpassword} = req.body;
            const post = new Post({
                email,password,cpassword,
            });
            const savedPost = await post.save();

            res.json({
                post:savedPost,
            });
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};


//need some more testing after completing like wala controleer
exports.getAllSignUpPosts = async (req,res) => {
    try {
        const posts = await Post.find().exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}