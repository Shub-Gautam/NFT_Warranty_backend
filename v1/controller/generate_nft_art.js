const mongoose = require("mongoose");

const Models = require("../../model");
const { upload_to_cloudinary } = require("../../helper/cloudinary_func");
const { generate_art } = require("../../helper/generate_nft_art");

exports.addnftdata = async (req, res, next) => {
  try {
    if (!req.body) return res.send("No additional Details provided");

    await generate_art(req.body);

    const result = await upload_to_cloudinary(
      `${process.env.PWD}/temp/assets/_NFTart1.png`
    );

    console.log(
      "NFT Art Generated and Uploaded to cloudinary===> " + result.etag
    );

    let obj = {
      img_url: `${result.url}`,
      original_filename: `${result.original_filename}`,
      format: `${result.format}`,
    };

    const newData = await Models.ArtData.create(obj);

    console.log("Art Details Uploaded to mongo===>" + `${newData._id}`);

    res.send("Success");
  } catch (err) {
    // Delete file
    res.send("OOPS!, Sorry Something went wrong");
    // next(err);
  }
};
