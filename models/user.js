const mongoose = require("mongoose");
const validator = require("validator");
const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (! validator.isEmail(value)) {
                throw new Error("Enter Valid Email");
            }
        }
    },
    address: {
        type: String,
        require: true
    },
    password: {
        required: true,
        minlength: 8,
        type: String
    },
    cart: [
        {
            productId: {
                type: String
            },
            title: {
                type: String
            },
            description: {
                type: String
            },
            imgsrc: {
                type: String
            },
            rating: {
                type: Number
            }
        },
    ],
    orders: [
        {
            productId: {
                type: String
            },
            title: {
                type: String
            },
            description: {
                type: String
            },
            imgsrc: {
                type: String
            },
            quantity: {
                type: Number
            },
            rating: {
                type: Number
            }

        },
    ],
    // createdDate: {
    //     type: Date,
    //     default: Date.now
    // },
    deleteFlag: {
        type: Boolean,
        default: false
    },
    token: {
        type: String
    },
    roles: {
        Admin: Number,
        Consumer: Number
    }

}, {timestamps: true});

const RegisterSchema = new mongoose.model("RegisterSchema", Schema);
module.exports = RegisterSchema;
