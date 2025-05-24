const express = require('express');
const {createPost,getAllPosts,getSinglePost} = require('../Controllers/postController'); 

const router = express.Router();

// Route to create a new post
router.post('/', createPost);

// Route to get all posts
router.get('/', getAllPosts);

// Route to get a single post
router.get('/:id', getSinglePost);

module.exports = router;
