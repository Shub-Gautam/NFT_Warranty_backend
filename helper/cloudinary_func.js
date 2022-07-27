const cloudinary = require("cloudinary");
const mongoose = require("mongoose");

const Models = require("../model");

exports.upload_to_cloudinary = async (file_path) => {
  try {
    let rest;
    await cloudinary.v2.uploader.upload(file_path, (err, result) => {
      if (err) console.log(err);
      rest = result;
    });
    return rest;
  } catch (err) {
    next(err);
  }
};
