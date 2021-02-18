const express = require("express");
const homeController = require("../Controllers/homeController");

const homeRouter = express.Router();
homeRouter
  .route("/")
  .get(homeController.getAllProduct)
  .post(homeController.createProduct);

// homeRouter.route("/:id").get(homeController.getAllProduct);

module.exports = homeRouter;
