const express = require("express");
const {
  getCategories,
  addCategories,
  updateCategories,
  deleteCategories,
} = require("../models/categories");
const router = express.Router();

router.get("/show", getCategories);
router.post("/add", addCategories);
router.put("/update/:id", updateCategories);
router.delete("/delete/:id", deleteCategories);

module.exports = router;
