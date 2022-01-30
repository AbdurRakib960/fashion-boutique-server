// External imports
const express = require("express");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const createError = require("http-errors");

// INTERNAL IMPORTS 
const User = require("../models/People");
const { RegisterController , LoginController} = require("../controllers/authController");

const router = express.Router();  

// Register user
router.post("/register", RegisterController);

// LOGIN
router.post("/login", LoginController)


module.exports = router;