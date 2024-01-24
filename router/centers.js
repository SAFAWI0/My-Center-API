const express = require("express");
const {getCenters,getCentersByCat} = require("../models/centers");
const router = express.Router();

router.get("/show",getCenters);
router.get("/getCentersByCat",getCentersByCat);

module.exports = router;
