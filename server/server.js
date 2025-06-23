const express = require("express");
const cors = require("cors");
const subscriberRoutes = require("./routes/subscriberRoutes");
const postRoutes = require("./routes/postRoutes");
const answerRoute = require('./routes/answerRoutes')

const mongoDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoDB();

app.use("/api/subscribers", subscriberRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/answers",answerRoute)

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
