const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  height: Number,
  weight: Number,
  phone: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: String,
});

module.exports = mongoose.model("User", userSchema);
