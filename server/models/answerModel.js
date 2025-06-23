const mongoose = require("mongoose");

const ansSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    answeredBy: {
      name:{type:String,required:true},
      email:{type:String,required:true}
    },
    content: {
      type: String,
      required: [true, "A answer must have content"],
    },
    votes:{
      type:Number,
      default:0
    }
  },
  { timestamps: true }
);

const Ans = mongoose.model("Ans", ansSchema);

module.exports = Ans;
