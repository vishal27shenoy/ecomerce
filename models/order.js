const mongoose = require("mongoose");
const validator = require("validator");
const Schema = new mongoose.Schema({
    id: {
        type: String
    },
    username: {
        type: String
    },
    userEmail: {
        type: String
    },
    userAddress: {
        type: String
    },
    productId: {
        type: String
    },
    status: {
        type: String,
        default: "proceed"
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    quantity: {
        type: Number
    },
    imgsrc: {
        type: String
    },
    rating: {
        type: Number
    },
    usernmae: {
        type: String
    },
    email: {
        type: String
    },
    OrderDate: {
        type: Date,
        default: Date.now
    }
});

const OrderSchema = new mongoose.model("OrderSchema", Schema);
module.exports = OrderSchema;
