const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  height: Number,
  weight: Number,
  mobile: String,
  email: String,
  password: String,
  gender: String,
});

module.exports = mongoose.model("User", userSchema);
