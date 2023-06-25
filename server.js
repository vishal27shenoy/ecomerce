require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbconn");
const path = require("path");
const passport = require("passport");
require('./config/passport');
const CartController = require("./controller/cartController");

// Cross Origin Resource Sharing
app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({extended: false}));

// built-in middleware for json
app.use(express.json());

app.use(passport.initialize())
const PORT = 5000;

connectDB();
// app.use("/", express.static(path.join(__dirname, "/public")));
// routes
app.use("/register", require("./routes/userRegister.js"));
app.use("/login", require("./routes/userLogin.js"));
app.use("/cart", passport.authenticate('jwt', {session: false}), require("./routes/userCart.js"));
app.use("/order", passport.authenticate('jwt', {session: false}), require("./routes/userOrder"));
app.use("/CancelOrder", passport.authenticate('jwt', {session: false}), require("./routes/userCancelOrder"));
app.use("/CancelCart", passport.authenticate('jwt', {session: false}), require("./routes/userCancelCart"));
app.use("/AdminGetOrder", passport.authenticate('jwt', {session: false}), require("./routes/adminOrderList"));
// app.use("/cart", require("./routes/userCart.js"));

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is Listening in port ${PORT}`);
    });
});
