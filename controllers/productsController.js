// EXTERNAL IMPORTS
const mongoose = require("mongoose");

// INTERNAL IMPORTS
const Product = require("../models/Product");

// create products (for admin)

async function createProducts(req, res) {
  const newProduct = new Product(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

// update product (for admin)
async function updateProduct(req, res) {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Delete product

async function deleteProduct(req, res) {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Get a single product
async function getSingleProduct(req, res) {
  try {
    const getSingleProduct = await Product.findById(req.params.id);
    res.status(200).json(getSingleProduct);
  } catch (err) {
      res.status(204).json(err);
  }
};

// get all products 
async function getAllProducts(req, res) {
    try{
        const getAllProduct = await Product.find();
        res.status(200).json(getAllProduct);
    } catch(err) {}
}

module.exports = {
  createProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProducts
};
