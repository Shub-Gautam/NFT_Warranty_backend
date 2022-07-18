const { Schema, model, Types } = require("mongoose");

const ArtData = new Schema(
  {
    category: {
      type: String,
      require: true,
    },
    company: {
      type: String,
      require: true,
    },
    product: {
      type: String,
      require: true,
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
  },
  {
    timestamps: true,
  }
);

module.exports = model("artdata", ArtData);
