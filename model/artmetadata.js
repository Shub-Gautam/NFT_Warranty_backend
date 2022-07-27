const { Schema, model, Types } = require("mongoose");

const ArtMetaData = new Schema(
  {
    company: {
      Type: String,
    },
    serial_no: {
      Type: String,
    },
    hash: {
      Type: String,
    },
    decodedHash: { Type: Types.Array },
    edition: {
      Type: Number,
    },
    date: { Type: Number },
    attributes: { Type: Types.Array },
  },
  {
    timestamps: true,
  }
);

module.exports = model("artmetadata", ArtMetaData);
