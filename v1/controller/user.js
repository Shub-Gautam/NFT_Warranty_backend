const mongoose = require("mongoose");

const Models = require("../../model");

exports.adduser = async (req, res, next) => {
  try {
    const newUser = await Models.User.create(req.body);
    res.send("UserCreated");
  } catch (err) {
    next(err);
  }
};
