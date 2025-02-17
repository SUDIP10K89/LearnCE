const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
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

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
