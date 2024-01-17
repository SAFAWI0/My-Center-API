const express = require("express");
const admin = require("../models/admins");
const router = express.Router();

router.get("/admins", admin.getalluser);
router.post("/register", admin.addadmins);
router.post("/login", admin.login);



module.exports = router;
