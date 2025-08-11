const express = require("express");
const {
  createPromptContoller,
  getPromptController,
  updatePromptContoller,
  deletePromptController,
} = require("../controllers/prompt.controller");
const isAuthenticated = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/").get(isAuthenticated, getPromptController);

router.route("/").post(isAuthenticated, createPromptContoller);

router.route("/:id").put(isAuthenticated, updatePromptContoller);

router.route("/:id").delete(isAuthenticated, deletePromptController);

module.exports = router;
