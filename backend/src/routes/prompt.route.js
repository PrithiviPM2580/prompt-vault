const express = require("express");
const { createPromptContoller } = require("../controllers/prompt.controller");
const isAuthenticated = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/").post(isAuthenticated, createPromptContoller);

module.exports = router;
