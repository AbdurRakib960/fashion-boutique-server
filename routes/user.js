//  EXTERNAL IMPORT 
const express = require("express");

// INTERNAL IMPORTS
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../routes/verifyToken");
const { updateUser, deleteUser, getSingleUser, getAllUser } = require("../controllers/userController");


const router = express.Router();

// get single user  
router.get("/find/:id", verifyTokenAndAdmin, getSingleUser)

// get all user 
router.get("/", verifyTokenAndAdmin, getAllUser)

// Update user 
router.put("/:id", verifyTokenAndAuthorization, updateUser);

// delete user 
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)

module.exports = router;