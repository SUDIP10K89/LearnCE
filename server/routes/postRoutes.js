const express = require('express');
const {createPost,getAllPosts,getSinglePost} = require('../Controllers/postController'); 
const authenticate = require('../middlewares/auth');

const router = express.Router();

// Route to create a new post
router.post('/', authenticate, createPost);

// Route to get all posts
router.get('/', authenticate, getAllPosts);

// Route to get a single post
router.get('/:id', authenticate, getSinglePost);

module.exports = router;
