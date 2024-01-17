const express = require("express");
const order = require("../models/orders");
const checkAuthadmin = require("../middleware/middleware");
const checkAuthuser = require("../middleware/middlewareuser");
var jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/ordersviwe", checkAuthadmin, order.getallorder);
router.post("/setstatue", checkAuthadmin, order.updateOrderStatus);
router.post("/add",checkAuthuser, order.addorder);

module.exports = router;
