const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post must have a title']
    },
    content: {
        type: String,
        required: [true, 'A post must have content']
    },
    author: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    likes:{
        type:[String],
        default:[]
    },
    tags: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
