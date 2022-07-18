const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGOURI}`).then((result) => {
  console.log("===== Connected to MongoDB =====");
});

module.exports = { mongoose };
