const User = require("../models/User");
const Product = require("../models/Product");

const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateProduct = async (req, res) => {
    try {
        const post = await Product.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Product.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const post = await Product.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const likeProduct = async (req, res) => {
    try {
        const post = await Product.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const getProduct = async (req, res) => {
    try {
        const post = await Product.findById(req.params.id).populate("owner");
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}


const getAllProduct = async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Product.find({ username });
        } else if (catName) {
            posts = await Product.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            posts = await Product.find().populate("owner");
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getUserProduct = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
        const posts = await Product.find({ userId: user._id })
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct, getUserProduct , likeProduct }