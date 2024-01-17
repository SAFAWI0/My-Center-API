const express = require("express");
const user = require("../models/users");
const router = express.Router();

router.post("/regster", user.regster);
router.post("/login", user.login);



module.exports = router;
