const express = require("express");
const {
  getSessions,
  addsession,
  updateSession,
  deleteSession,
} = require("../models/sessions");
const router = express.Router();

router.get("/show/:id", getSessions);
router.post("/add", addsession);
router.put("/update/:id", updateSession);
router.delete("/delete/:id", deleteSession);

module.exports = router;
