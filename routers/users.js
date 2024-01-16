const express = require("express");
const {getOrders } = require("../models/users");
const router = express.Router();

router.get("/", getOrders);

module.exports = router;