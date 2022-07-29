const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Models = require("../../model");
const { upload_to_cloudinary } = require("../../helper/cloudinary_func");
const { generate_art } = require("../../helper/generate_nft_art");

exports.addnftdata = async (req, res, next) => {
  try {
    if (!req.body) return res.send("No additional Details provided");

    // Generate Art and Metadata
    await generate_art(req.body);

    console.log(
      "NFT Art Generated and Uploaded to cloudinary===> " + result.etag
    );

    // Saving Art
    const result = await upload_to_cloudinary(
      `${process.env.PWD}/temp/assets/_NFTart1.png`
    );

    const uuid_USE = uuidv4();
    let obj = {
      nft_id: uuid_USE,
      img_url: `${result.secure_url}`,
      original_filename: `${result.original_filename}`,
      format: `${result.format}`,
    };

    const newData = await Models.ArtData.create(obj);
    console.log("Art Uploaded to mongo===>" + `${newData._id}`);

    // Saving JSON/Metadata
    const newMetaData = require("../../temp/assets/_metadata.json");
    newMetaData.nft_art_id = uuid_USE;

    const metaData = await Models.ArtMetaData.create(newMetaData[0]);
    console.log("Art Meta Uploaded to mongodb===> " + metaData._id);

    res.send({ status: 200, message: { nft_url: result.secure_url } });
  } catch (err) {
    res.send("OOPS!, Sorry Something went wrong");
    // next(err);
  }
};

exports.mintNft = async (req, res, next) => {
  try {
  } catch (err) {
    res.send("OOPS!, Sorry Something went wrong");
    // next(err);
  }
};

exports.getNft = async (req, res, next) => {
  try {
    const foundedObj = await Models.NftPre.findAll(req.body);
    res.send(foundedObj);
  } catch (err) {
    res.send("OOPS!, Sorry Something went wrong");
    // next(err);
  }
};

exports.getArtData = async (req, res, next) => {
  try {
    const foundedObj = await Models.ArtData.findAll(req.body);
    res.send(foundedObj);
  } catch (err) {
    res.send("OOPS!, Sorry Something went wrong");
    // next(err);
  }
};
