const Post = require("../models/postModel");

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const { name, email } = req.user;

    console.log(name, email);
    // Validate request body
    if (!title || !content) {
      return res.status(400).json({
        status: "fail",
        message: "Title, content, and author are required",
      });
    }

    // Create a new post
    const newPost = await Post.create({
      title,
      content,
      author: name,
      email,
      tags,
    });

    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: "success",
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//get single post
const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//Delete Post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }
    console.log(post);

    // Check if the logged in user is the creator of the post
    if (post.email.toString() !== req.user.email) {
      return res.status(403).json({
        status: "fail",
        message: "You do not have permission to delete this post",
      });
    }

    await post.deleteOne();

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
//Update Post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }

    // Check if the logged in user is the creator of the post
    // if (post.email.toString() !== req.user.email) {
    //     return res.status(403).json({
    //         status: 'fail',
    //         message: 'You do not have permission to update this post'
    //     });
    // }

    const { title, content, tags } = req.body;
    if (title !== undefined) post.title = title;
    if (content !== undefined) post.content = content;
    if (tags !== undefined) post.tags = tags;

    await post.save();

    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//likes
const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(post)
    const uid = req.user.user_id;

    if (!post) return res.status(404).json({ message: "Post not found" });

    const liked = post.likes.includes(uid);

    if (liked) {
      post.likes.pull(uid);
    } else {
      post.likes.push(uid);
    }

    await post.save();
    res.json({ liked: !liked, likesCount: post.likes.length });
  } catch (error) {
    console.log(error)
  }
console.log(req.user)
};

//export
module.exports = {
  createPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePost,
  likePost,
};
