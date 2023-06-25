const express = require("express");
const router = express.Router();
const LoginController = require("../controller/logincontroller");
router.post("/", LoginController.handleLogin);
module.exports = router;
