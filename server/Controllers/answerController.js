const Answer = require('../models/answerModel')

const createAnswer =async (req,res) => {
    try {
        const postId = req.params.postId;
        const {content} = req.body;
        const {name, email} = req.user;

        if(!content){
           return res.json({
            success:false,
            message:"Content is necessary."
           })
        }

        const newAnswer = await Answer.create({
            postId,
            answeredBy:{
                name,
                email
            },
            content
        })


        res.json({
            success:true,
            answer:newAnswer,
            message:"Successfully answered."
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            error:error.message,
            message: "Error posting answer."
        })
    }
 }

const getAnswer =async (req,res) => {
    try {
        const postId = req.params.postId;
        const answers = await Answer.find({postId});


        res.json({
            success:true,
            answers,
            message:"Successfully Fetched"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            error:error.message,
            message: "Error Fetching answer."
        })
    }
 }
 

 module.exports={
    createAnswer,
    getAnswer
 }
