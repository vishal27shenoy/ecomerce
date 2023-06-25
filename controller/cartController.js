const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleCart = async (req, res) => {
    console.log(req.body, req.params)
    try {
        const user = await User.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $push: {
                cart: [
                    {
                        productId: req.body.productid,
                        title: req.body.title,
                        description: req.body.description,
                        imgsrc: req.body.imgsrc,
                        rating: req.body.rating
                    }
                ]
            }
        });
        console.log(user);
        res.status(200).send({message: "Sucessfull", cart: user.cart});
    } catch (err) {
        res.status(400).send("UnSucessfull");
    }
};

module.exports = {
    handleCart
};
