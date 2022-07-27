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

    const newMetaData = require("../../temp/assets/_metadata.json");

    const metaData = await Models.ArtMetaData.create(newMetaData[0]);

    console.log("Art Meta Uploaded to mongodb===> " + metaData._id);

    let obj = {
      img_url: `${result.secure_url}`,
      original_filename: `${result.original_filename}`,
      format: `${result.format}`,
      metadata: metaData._id,
    };

    const newData = await Models.ArtData.create(obj);

    console.log("Art Details Uploaded to mongo===>" + `${newData._id}`);

    res.send({ status: 200, message: { nft_url: result.secure_url } });
  } catch (err) {
    res.send("OOPS!, Sorry Something went wrong");
    // next(err);
  }
};
