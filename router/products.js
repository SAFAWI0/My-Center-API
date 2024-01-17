const express = require("express");
const product = require("../models/prodect");
const router = express.Router();

router.post("/addprouducts", product.addprodects);
router.post("/updataprouducts/:id", product.updataprodects);
router.get("/getallproducts", product.getallproducts);
router.delete("/delete/:id", product.deleteproduct);




module.exports = router;
