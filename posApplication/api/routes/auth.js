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
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send({ error: "User not found!" });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(403).json("Invalid password");
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;
