const express = require("express");
const {
  getAdvertisements,
  addAdvertisements,
  updateAdvertisements,
  deleteAdvertisements,
} = require("../models/advertisements");
const router = express.Router();

router.get("/show", getAdvertisements);
router.post("/add", addAdvertisements);
router.put("/update/:id", updateAdvertisements);
router.delete("/delete/:id", deleteAdvertisements);

module.exports = router;
