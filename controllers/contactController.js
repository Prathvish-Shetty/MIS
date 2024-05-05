const Post = require("../models/contactModel");

exports.contactPost = async (req,res) => {
    try{
            const {name, email,phone} = req.body;
            const post = new Post({
                name,email,phone,
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
exports.getAllContacts = async (req,res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();
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