const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const isExistingUser = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (isExistingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function loginController(req, res) {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  let user;
  if (identifier.includes("@")) {
    user = await userModel.findOne({ email: identifier });

    if (!user) {
      return res.status(404).json({ message: "User with email not found" });
    }
  } else {
    user = await userModel.findOne({ username: identifier });

    if (!user) {
      return res.status(404).json({ message: "User with username not found" });
    }
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res.status(200).json({ message: "Login successful" });
}

async function logoutController(req, res) {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful" });
}

module.exports = {
  registerController,
  loginController,
  logoutController,
};
