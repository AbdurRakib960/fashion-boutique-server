// EXTERNAL IMPORTS
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// INTERNAL IMPORTS
const User = require("../models/People");

async function RegisterController(req, res) {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRATE),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
//  LOGIN CONTROLLER

async function LoginController(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username});
    // !user && res.status(401).json("user not found");
    if (!user) {
      res.status(401).json("user not found");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SECRATE
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      console.log(OriginalPassword)
      if (OriginalPassword === req.body.password) {
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRATE,
          { expiresIn: "3d" }
        );
        res.cookie(process.env.COOKIE_NAME, accessToken, {
          maxAge: process.env.COOKIE_EXPIRY,
          httpOnly: true,
          signed: true,
        });
        const { password, ...other } = user._doc;
        console.log(req.cookies);
        res.status(200).json({ ...other, accessToken });
      } else {
        res.status(401).json("wrong credentials !");
      }
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = {
  RegisterController,
  LoginController,
};
