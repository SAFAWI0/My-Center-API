const express = require("express");
const { getOrders, addOrders } = require("../models/orders");

const router = express.Router();

router.get("/show", getOrders);
router.post("/add", addOrders);

module.exports = router;
