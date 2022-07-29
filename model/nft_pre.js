const { Schema, model, Types } = require("mongoose");
const mongoose = require("mongoose");
var UUID = mongoose.Types.UUID;

const NftPre = new Schema(
  {
    user_id: {
      type: Types.ObjectId,
      ref: "user",
    },
    nft_id: {
      type: String,
    },
    filehash: { type: String, required: true },
    filepath: { type: String, required: true },
    metadatahash: { type: String, required: true },
    metadatapath: { type: String, required: true },
    metadata: {
      type: Types.ObjectId,
      ref: "artmetadata",
    },
    artdata: {
      type: Types.ObjectId,
      ref: "artdata",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("nft_pre", NftPre);
