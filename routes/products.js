// EXTERNAL IMPORT
const express = require("express");

// INTERNAL IMPORTS
const {
  createProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProducts,
} = require("../controllers/productsController");
const { verifyTokenAndAdmin } = require("../routes/verifyToken");

const router = express.Router();

// create products
router.post("/", verifyTokenAndAdmin, createProducts);

// update product

router.put("/:id", verifyTokenAndAdmin, updateProduct);

// delete product

router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

// get a product

router.get("/find/:id", getSingleProduct);

// get all products

router.get("/", getAllProducts);

module.exports = router;
