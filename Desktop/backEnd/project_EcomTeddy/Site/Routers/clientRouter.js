const express = require("express");
const informationController = require("../Controllers/informationController");

let clientRouter = express.Router();
clientRouter
  .route("/ChangeInformation/account=information/id=:id")
  .get(informationController.beforeCustomizeInformation);
clientRouter
  .route("/ChangeInformation/account=updateInformation")
  .get(informationController.beforeCustomizeInformation)
  .post(informationController.afterCustomizeInformation);
clientRouter
  .route("/ChangePassword/account=password/id=:id")
  .get(informationController.beforeCustomizePassword);
clientRouter
  .route("/ChangeInformation/account=updatePassword")
  .post(informationController.afterCustomizePassword)
  .get(informationController.beforeCustomizePassword);

module.exports = clientRouter;
