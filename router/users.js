const express = require("express");
const { regster, login } = require("../models/users");
const router = express.Router();

router.post("/regster", regster);
router.post("/login", login);

module.exports = router;
