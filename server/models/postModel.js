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
        type:String
    },
    tags: {
        type: [String],
        default: []
    },
    votes:{
        type:Number,
        default:0
    },
    answers:{
        type:Number,
        default:0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;