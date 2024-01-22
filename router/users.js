const express = require("express");
const { regster, login, filter } = require("../models/users");
const router = express.Router();

router.post("/regster", regster);
router.post("/login", login);
router.post("/filter", filter);
module.exports = router;
