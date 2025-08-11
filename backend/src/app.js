const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler.middleware");

const authRoutes = require("./routes/auth.route");
const promptRoutes = require("./routes/prompt.route");
const exportRoutes = require("./routes/export.route");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/prompts", promptRoutes);
app.use("/api/v1/export", exportRoutes);

app.use(errorHandler);

module.exports = app;
