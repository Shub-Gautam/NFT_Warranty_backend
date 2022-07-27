const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { mongoose } = require("./utils/mongo_connector");
/* import moralis */
const Moralis = require("moralis/node");
const cloudinary = require("cloudinary");

const app = express();
const PORT = process.env.LOCAL_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Moralis init code */
const serverUrl = `${process.env.MORALIS_SERVER_URL}`;
const appId = `${process.env.MORALIS_APP_ID}`;
const masterKey = `${process.env.MORALIS_MASTER_KEY}`;

// await Moralis.start({ serverUrl, appId, masterKey });

cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
});

// Test Api
app.use("/test", async (req, res, next) => {
  res.status(200).send({ status: 200, message: "TEST API" });
});

// Routes Api
const route = require("./v1/route");
app.use("/api", require("./v1/route/generate_nft_art"));

app.listen(PORT, () => {
  console.log("====== PORT - " + PORT + " ========");
});
