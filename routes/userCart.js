const express = require("express");
const router = express.Router();
const CartController = require("../controller/cartController");
router.post("/:id", CartController.handleCart);
module.exports = router;
