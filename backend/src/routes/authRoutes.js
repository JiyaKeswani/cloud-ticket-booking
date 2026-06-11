const authMiddleware =
require("../middleware/authMiddleware");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = [];

/*
REGISTER
*/
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find(
    user => user.email === email
  );

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully"
  });
});

/*
LOGIN
*/
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    user => user.email === email
  );

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials"
    });
  }

  const validPassword =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!validPassword) {
    return res.status(400).json({
      message: "Invalid credentials"
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    "mysecretkey",
    {
      expiresIn: "1h"
    }
  );

  res.json({
    message: "Login successful",
    token
  });
});
router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      message: "Protected route accessed",
      user: req.user
    });
  }
);
module.exports = router;