const express = require("express");
const {getSessions, addsession} = require("../models/sessions");
const router = express.Router();

router.get("/show",getSessions);
router.put("/add",addsession);

module.exports = router;
