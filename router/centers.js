const express = require("express");
const {getCenters} = require("../models/centers");
const router = express.Router();

router.get("/show",getCenters);

module.exports = router;
