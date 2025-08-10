const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.route");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);

module.exports = app;
