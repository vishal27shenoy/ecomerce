const order = require("../models/order");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleAdminOrder = async (req, res) => {
    try {
        const data = await order.find();
        if (data) {
            res.send({message: "Get Data", data: data})
        }
    } catch (err) {
        res.send({message: "", err})
    }

};
module.exports = {
    handleAdminOrder
};
