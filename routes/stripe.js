const express = require("express");


const router = express.Router();
const KEY = "sk_test_51HZgKgCX3jxDeEgKjesio14qVn7WGwpAIJr9NsSOfQKJ6eATX0gxuqWD6xmEp4BK4wf3LkrJXHh5O2kIVVSlUnrY00JSAfG1VC"
const stripe = require("stripe")(KEY);



router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    },
    (stripeError, stripeRes) => {
        if(stripeError) {
            res.status(500).json(stripeError);
        } else {
            res.status(200).json(stripeRes);
        }
    })
});




module.exports = router;