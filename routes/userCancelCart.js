const express = require("express");
const router = express.Router();
const CartCancelController = require("../controller/cancelCartController");
router.post("/:id/:cartId", CartCancelController.handleCancelCart);
module.exports = router;
