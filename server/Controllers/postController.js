const Post = require('../models/postModel');

// Create a new post
const createPost = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body;

        // Validate request body
        if (!title || !content || !author) {
            return res.status(400).json({
                status: 'fail',
                message: 'Title, content, and author are required'
            });
        }

        // Create a new post
        const newPost = await Post.create({
            title,
            content,
            author,
            tags
        });

        res.status(201).json({
            status: 'success',
            data: {
                post: newPost
            }
        });
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

//get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: 'success',
            data: {
                posts
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

//get single post
const getSinglePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({
                status: 'fail',
                message: 'Post not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

//export
module.exports = {
    createPost,
    getAllPosts,
    getSinglePost
};

