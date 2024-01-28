const express = require("express");
const {
  getCenters,
  getCentersByCat,
  getCentersById,
  addCenters,
  updateCenters,
  deleteCenters,
} = require("../models/centers");
const router = express.Router();

router.get("/show", getCenters);
router.get("/getCentersByCat", getCentersByCat);
router.get("/getCentersById/:id", getCentersById);
router.post("/add", addCenters);
router.put("/update/:id", updateCenters);
router.delete("/delete/:id", deleteCenters);

module.exports = router;
