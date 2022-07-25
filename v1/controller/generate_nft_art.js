const mongoose = require("mongoose");

const Models = require("../../model");
const { upload_to_cloudinary } = require("../../helper/cloudinary_func");

exports.addnftdata = async (req, res, next) => {
  try {
    // res.send("Art metadata Added to database");

    const result = await upload_to_cloudinary(
      "C:\\Users\\SHUBHAM\\Documents\\NFT-war\\temp\\assets\\1658420220035-463156296.png"
    );

    let obj = req.body;

    obj.img_url = `${result.url}`;
    obj.original_filename = `${result.original_filename}`;
    obj.format = `${result.format}`;

    const newUser = await Models.ArtData.create(obj);

    console.log("Art generated" + `${newUser._id}`);

    res.send("Success");
  } catch (err) {
    res.send("Sorry Something went wrong");
    // next(err);
  }
};
