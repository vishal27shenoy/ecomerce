const User = require("../models/user");
const Order = require("../models/order");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleOrder = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $push: {
                orders: [
                    {
                        productId: req.body.productid,
                        title: req.body.title,
                        description: req.body.description,
                        quantity: req.body.quantity,
                        imgsrc: req.body.imgsrc,
                        rating: req.body.rating
                    }
                ]
            }
        });
        const SchemaValue = new Order({
            id: data._id,
            username: data.username,
            userEmail: data.email,
            userAddress: data.address,
            productId: req.body.productid,
            title: req.body.title,
            description: req.body.description,
            quantity: req.body.quantity,
            imgsrc: req.body.imgsrc,
            rating: req.body.rating
        });
        await SchemaValue.save();
        res.status(200).send("Sucessfull");
    } catch (err) {
        res.status(400).send("UnSucessfull");
    }
}
module.exports = {
    handleOrder
};
