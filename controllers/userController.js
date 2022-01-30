// internal imports
const User = require("../models/People");

// get single user 
async function getSingleUser(req, res) {
    try{
        const singleUser = await User.findById(req.params.id);
        res.status(200).json(singleUser);
    } catch(err) {
        res.status(500).json(err)
    }
};

// get all users 
async function getAllUser(req, res) {
    try{
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    }catch(err){
        res.status(500).json(err.message)
    }
}

// user update
async function updateUser(req, res) {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {new: true}
        );
        res.status(200).json("user updated successfully")

    } catch(err) {
        res.status(500).json(err.message)
    }
};

// delete user  
async function deleteUser(req, res) {
    try{
        const deleteUser = await User.findOneAndDelete(req.params.id);
        res.status(200).json(deleteUser)
    } catch(err) {
        res.status(500).json(err.message)
    }
}


module.exports = {
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser
}