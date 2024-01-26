const express = require("express");
const { alluser,regster, login, filter, updateUsers } = require("../models/users");
const router = express.Router();

router.get("/users",alluser );
router.post("/regster", regster);
router.post("/login", login);
router.post("/filter", filter);
router.put("/update/:id",  updateUsers);
module.exports = router;
