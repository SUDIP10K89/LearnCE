const express = require('express');
const {createPost,getAllPosts,getSinglePost,deletePost,updatePost,likePost} = require('../Controllers/postController'); 
const authenticate = require('../middlewares/auth');

const router = express.Router();

// Route to create a new post
router.post('/', authenticate, createPost);

// Route to get all posts
router.get('/', getAllPosts);

// Route to get a single post
router.get('/:id', getSinglePost);

//Delete Post
router.delete('/:id',authenticate,deletePost)

//Update Post
router.put('/:id',updatePost)

//Like Post
router.post('/:id/like',authenticate,likePost)

module.exports = router;
