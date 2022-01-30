//Internal imports
const Cart = require("../models/Cart");


async function PostCartItem(req, res) {
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch(err)  {
        res.status(500).json(err);
    }
};

// update cart products
async function updateCart(req, res) {
    try{
        const CartUpdate = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {new: true}
        );
        res.status(200).json(CartUpdate);
    } catch(err) {
        res.status(500).json(err)
    }
};

// delete Carts 
async function deleteCart(req, res) {
    try{
        const cartDelete = await Cart.findOneAndDelete(req.params.id);
        res.status(200).json(cartDelete)
    } catch(err) {
        res.status(500).json(err);
    }
};

// get user cart 
async function userCart(req, res) {
    try{
        const userCart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(userCart);
    } catch(err) {
        res.status(500).json(err)
    }
};

// get all user 
async function getAllCart(req,res) {
    try{
        const allCart = Cart.find();
        res.status(200).json(allCart);
    } catch(err) {
        res.status(500).json(err)
    }
}


module.exports = {
    PostCartItem,
    updateCart,
    deleteCart,
    userCart,
    getAllCart
}