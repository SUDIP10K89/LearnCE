const express = require('express');
const {createPost,getAllPosts} = require('../Controllers/postController'); 

const router = express.Router();

// Route to create a new post
router.post('/', createPost);

// Route to get all posts
router.get('/', getAllPosts);

module.exports = router;
