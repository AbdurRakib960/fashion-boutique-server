// EXTERNAL IMPORTS
const express = require("express");

// INTERNAL IMPORTS
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const {
  getAllCart,
  userCart,
  PostCartItem,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");

const router = express.Router();

router.get("/", verifyTokenAndAdmin, getAllCart);
router.get("/find/:userId", verifyTokenAndAuthorization, userCart);
router.post("/", verifyToken, PostCartItem);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

module.exports = router;
