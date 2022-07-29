const { Schema, model, Types } = require("mongoose");
const mongoose = require("mongoose");

var UUID = mongoose.Types.UUID;

const ArtData = new Schema(
  {
    category: {
      type: String,
      // require: true,
    },
    company: {
      type: String,
      // require: true,
    },
    product: {
      type: String,
      // require: true,
    },
    order_id: {
      type: String,
    },
    order_date: {
      type: Date,
    },
    shiped_date: {
      type: Date,
    },
    warranty: {
      type: Number,
    },
    nft_id: {
      type: String,
      required: true,
    },
    fid: {
      type: String,
    },
    user_id: {
      type: Types.ObjectId,
      ref: "user",
    },
    img_url: {
      type: String,
    },
    original_filename: {
      type: String,
    },
    format: {
      type: String,
    },
    metadata: {
      type: Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("artdata", ArtData);
