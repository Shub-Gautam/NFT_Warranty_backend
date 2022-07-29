const mongoose = require("mongoose");

const Models = require("../../model");

exports.addUser = async (req, res, next) => {
  try {
    req.body.wallet =
      "1E99423A4ED27608A15A2616A2B0E9E52CED330AC530EDCC32C8FFC6A526AEDD";
    const newUser = await Models.User.create(req.body);
    res.send("UserCreated" + newUser._id);
  } catch (err) {
    res.send("Something went Wrong");
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const newUser = await Models.User.findOne(req.body);
    if (!newUser) return res.send("No user found !");
    res.send(newUser);
  } catch (err) {
    res.send("Something went Wrong");
    next(err);
  }
};
