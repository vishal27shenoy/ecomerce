const express = require("express");
const router = express.Router();
const OrderController = require("../controller/AdminGetorderController");
router.get("/", OrderController.handleAdminOrder);
module.exports = router;
