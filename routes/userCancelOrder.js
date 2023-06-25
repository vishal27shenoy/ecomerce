const express = require("express");
const router = express.Router();
const OrderCancelController = require("../controller/cancelOrderController");
router.post("/:id/:orderId/:AdminOrderId", OrderCancelController.handleCancelOrder);
module.exports = router;
