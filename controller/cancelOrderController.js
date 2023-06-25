const User = require("../models/user");
const Order = require("../models/order");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleCancelOrder = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $pull: {
                orders: {
                    _id: req.params.orderId
                }
            }
        });
        console.log(data)
        const orderDelete = await Order.findByIdAndUpdate({
            _id: req.params.AdminOrderId
        }, {status: "cancelled"});
        res.status(200).send("Sucessfull");
    } catch (err) {
        res.status(400).send("UnSucessfull");
    }
}
module.exports = {
    handleCancelOrder
};
