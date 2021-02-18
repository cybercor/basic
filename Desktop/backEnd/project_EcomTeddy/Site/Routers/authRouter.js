const express = require("express");
const authController = require("../Controllers/authController");

let authRouter = express.Router();
authRouter
  .route("/Login")
  .get(authController.getSignin)
  .post(authController.postLogin);
authRouter.route("/Logout").get(authController.logout);
authRouter
  .route("/Register")
  .get(authController.getSignup)
  .post(authController.postSignup);

module.exports = authRouter;
