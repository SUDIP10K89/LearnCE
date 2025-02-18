const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const subscriberExists = await Subscriber.findOne({ email });
    if (subscriberExists)
      return res.status(400).json({ message: "Subscriber already exists" });
      const newSubscriber = new Subscriber({ email });
     await newSubscriber.save();

   await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "You're in! Welcome to Learn CE 🎉",
      text: `Hey there!,  
  
  Thank you for joining the Learn CE community! 🚀 We're thrilled to have you on board.  
  
  From now on, you’ll receive the latest updates, exclusive resources, and valuable insights straight to your inbox. We promise to keep things useful and exciting—no spam, just pure learning goodness.  
  
  Stay curious, keep exploring, and let's grow together!  
  
  If you ever have any questions or suggestions, just hit reply—we’d love to hear from you.  
  
  Best,  
  The Learn CE Team`,
    });
    res.json({ message: "Subscription Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
});

module.exports = router;
