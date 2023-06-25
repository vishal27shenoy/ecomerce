const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleAdminLogin = async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body);
    if (email != null && password != null) {
        if (email === "vishalshenoy603@gmail.com" && password === "12345678") {
            const Token = jwt.sign({
                userInfo: {
                    email: email,
                    _id: "64951ec72a59777cf81982a3"
                }
            }, process.env.SECRET, {expiresIn: "1d"});
            res.cookie("jwt", Token, {
                httpOnly: true,
                sameSite: "strict",
                secure: true,
                maxAge: 24 * 60 * 60 * 1000
            });
            res.status(200).send({email: email, Token: Token, message: "Successful"});
        } else {
            res.status(400).send({message: "UnSuccessful"});
        }
    } else {
        res.status(400);
    }
};
module.exports = {
    handleAdminLogin
};
