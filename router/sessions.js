const express = require("express");
const {getSessions} = require("../models/sessions");
const router = express.Router();

router.get("/show",getSessions);

module.exports = router;
