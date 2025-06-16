const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  answeredBy: {
    type:String,
    required:true
  },
  content: {
    type: String,
    required: [true, 'A post must have content']
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;