const express = require("express");
const {getOffers} = require("../models/offers");
const router = express.Router();

router.get("/show", getOffers);

module.exports = router;
