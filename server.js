const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { mongoose } = require("./utils/mongo_connector");

const app = express();
const PORT = process.env.LOCAL_PORT;

// Test Api
app.use("/test", async (req, res, next) => {
  res.status(200).send({ status: 200, message: "TEST API" });
});

// Routes Api
// app.use("/api", route);

app.listen(PORT, () => {
  console.log("====== PORT - " + PORT + " ========");
});
