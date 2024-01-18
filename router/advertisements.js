const express = require("express");
const {getAdvertisements} = require("../models/advertisements");
const router = express.Router();

router.get("/show", getAdvertisements);

module.exports = router;
