const express = require('express');

const {createAnswer, getAnswer} = require('../Controllers/answerController')
const authenticate = require('../middlewares/auth');

const answerRoute = express.Router();


answerRoute.post('/:postId',authenticate,createAnswer)
answerRoute.get('/:postId',getAnswer)


module.exports = answerRoute;

