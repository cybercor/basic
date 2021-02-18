const express = require("express");
let productController = require("../Controllers/productController");

let productRouter = express.Router();
productRouter
  .route("/ListProducts")
  .get(productController.handleRenPagiSorSear);
// productRouter.route("/ListProducts/:id").get(productController.pagination);
module.exports = productRouter;
