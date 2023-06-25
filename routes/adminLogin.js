const express = require("express");
const router = express.Router();
const AdminLoginController = require("../controller/AdminLoginController");
router.post("/", AdminLoginController.handleAdminLogin);
module.exports = router;
