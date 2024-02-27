const express = require("express");
const {
  getSupport,
  addSupport,
  updateSupport,
  deleteSupport,
} = require("../models/support");

const router = express.Router();

router.get("/show", getSupport);
router.post("/add", addSupport);
router.put("/update/:id", updateSupport);
router.delete("/delete/:id", deleteSupport);

module.exports = router;
