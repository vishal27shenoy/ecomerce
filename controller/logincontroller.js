const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleLogin = async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body);
    if (email != null && password != null) {
        const user = await User.findOne({email: email});
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const Token = jwt.sign({
                    userInfo: {
                        username: user.username,
                        _id: user._id,
                        roles: user.roles
                    }
                }, process.env.SECRET, {expiresIn: "1d"});
                user.token = Token;
                const result = await user.save();
                res.cookie("jwt", Token, {
                    httpOnly: true,
                    sameSite: "strict",
                    secure: true,
                    maxAge: 24 * 60 * 60 * 1000
                });
                console.log(result);
                res.status(200).send({
                    _id: result._id,
                    username: result.username,
                    email: result.email,
                    Token: Token,
                    roles: user.roles,
                    message: "Successful"
                });
            } else {
                res.status(400).send({message: "UnSuccessful"});
            }
        } else {
            res.status(400);
        }
    }
};

module.exports = {
    handleLogin
};
