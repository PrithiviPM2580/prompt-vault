const express = require("express");
const isAuthenticated = require("../middlewares/auth.middleware");
const {
  registerController,
  loginController,
  logoutController,
  getUserController,
} = require("../controllers/auth.controller");

const router = express.Router();

// Register route

router.route("/register").post(registerController);

router.route("/login").post(loginController);

router.route("/logout").get(logoutController);

router.route("/user").get(isAuthenticated, getUserController);

module.exports = router;
