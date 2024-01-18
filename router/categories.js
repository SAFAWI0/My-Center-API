const express = require("express");
const { getCategories } = require("../models/categories");
const router = express.Router();

router.get("/show", getCategories);

module.exports = router;
