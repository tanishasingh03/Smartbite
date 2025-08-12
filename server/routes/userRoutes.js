/*const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
*/

const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Make sure this model exists

// @route   POST /api/users/register
// @desc    Register a new user
router.post("/register", async (req, res) => {
  const { name, age, height, weight, mobile, email, password, gender } =
    req.body;

  try {
    // Check if user already exists by email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create and save new user
    const newUser = new User({
      name,
      age,
      height,
      weight,
      mobile,
      email,
      password,
      gender,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
