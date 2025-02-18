const express = require("express");
const cors = require("cors");
const subscriberRoutes = require("./routes/subscriberRoutes");

const mongoDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoDB();

app.use("/api/subscribers", subscriberRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
