const express = require("express");
const router = express.Router();
const OrderController = require("../controller/orderController");
router.post("/:id", OrderController.handleOrder);
module.exports = router;
