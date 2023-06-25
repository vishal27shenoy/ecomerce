const User = require("../models/user");
const Order = require("../models/order");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleCancelCart = async (req, res) => {
    try {
        const del = await User.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $pull: {
                cart: {
                    _id: req.params.cartId
                }
            }
        });
        const data = await User.findById({_id: req.params.id});
        // console.log(data);
        res.status(200).send({message: "Sucessfull", updatedCart: data.cart});
    } catch (err) {
        res.status(400).send("UnSucessfull");
    }
}
module.exports = {
    handleCancelCart
};
