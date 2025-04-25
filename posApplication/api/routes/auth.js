const User = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
//Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //şifreyi hashliyoruz
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json("A new user created.");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
