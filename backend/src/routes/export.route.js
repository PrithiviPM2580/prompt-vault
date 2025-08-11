const express = require("express");
const isAuthenticated = require("../middlewares/auth.middleware");
const {
  getJSONContoller,
  getPDFController,
} = require("../controllers/export.controller");

const router = express.Router();

router.route("/json").get(isAuthenticated, getJSONContoller);

router.route("/pdf").get(isAuthenticated, getPDFController);

module.exports = router;
