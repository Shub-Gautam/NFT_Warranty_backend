const { Schema, model, Types } = require("mongoose");

const ArtMetaData = new Schema(
  {
    company: {
      type: String,
    },
    serial_no: {
      type: String,
    },
    hash: {
      type: String,
    },
    nft_art_id: {
      type: Types.UUID,
      required: true,
    },
    filehash: {
      type: String,
    },
    metadatahash: {
      type: String,
    },
    decodedHash: { type: Array },
    edition: {
      type: Number,
    },
    date: { type: Number },
    attributes: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = model("artmetadata", ArtMetaData);
