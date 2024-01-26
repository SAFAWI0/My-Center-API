const express = require("express");
const {
  getCenters,
  getCentersByCat,
  getCentersById,
} = require("../models/centers");
const router = express.Router();

router.get("/show", getCenters);
router.get("/getCentersByCat", getCentersByCat);
router.get("/getCentersById/:id", getCentersById);

module.exports = router;
