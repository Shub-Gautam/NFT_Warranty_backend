const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { mongoose } = require("./utils/mongo_connector");

const cloudinary = require("cloudinary");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
});

app.use((req, res, next) => {
  const info = req.method + " " + res.statusCode + " " + req.url;
  console.log("API HIT -------------->", info, "\n|\nv\n|\nv\n");
  if (!req.header("lang") || req.header("lang") == "") req.lang = "en";
  else req.lang = req.header("lang");
  next();
});

// Test Api
app.use("/test", async (req, res, next) => {
  res.status(200).send({ status: 200, message: "TEST API" });
});

// Routes Api
const route = require("./route.js");
app.use("/api", route);

app.listen(PORT, () => {
  console.log("====== PORT - " + PORT + " ========");
});
