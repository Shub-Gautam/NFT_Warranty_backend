const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    flipkart_id: {
      type: String,
    },
    wallet: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", UserSchema);
