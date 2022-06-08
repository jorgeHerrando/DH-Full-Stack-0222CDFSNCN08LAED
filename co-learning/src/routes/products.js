const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

/* ALL THE PRODUCTS */
router.get("/", productsController.all);

/* CREATE PRODUCT VIEW */
router.get("/create", productsController.createProductView);

/* CREATE PRODUCT */
router.post("/create", productsController.store);

/* PRODUCT DETAIL */
router.get("/:id", productsController.productDetail);

/* EDIT PRODUCT VIEW */
router.get("/edit/:id", productsController.editProductView);

/* EDIT PRODUCT  */
router.put("/edit/:id", productsController.editProduct);

/* DELETE PRODUCT  */
router.delete("/delete/:id", productsController.delete);

module.exports = router;
