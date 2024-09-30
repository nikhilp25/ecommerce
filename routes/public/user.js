const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { userServiceInstance } = require("../../services");
const JWT_SECRET = process.env.JWT_TOKEN;
const authenticateJWT = require("../../auth/authMiddleware");

router.get("/", async (req, res) => {
  const data = await userServiceInstance.getUserData();
  res.send(data);
});

router.post("/signUp", async (req, res) => {
  try {
    const { email, firstName, lastName, password, mobileNo, username } =
      req.body;

    const user = await userServiceInstance.registerNewUser({
      email,
      firstName,
      lastName,
      password,
      mobileNo,
      username,
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userServiceInstance.loginExistingUser({
      email,
      password,
    });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN, {
      expiresIn: "1h",
    });
    res.status(201).json({ token, user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post("/userAddress", authenticateJWT, async (req, res) => {
  try {
    const {
      addressLine1,
      addressLine2,
      city,
      postalCode,
      country,
      telephoneNo,
      mobileNo,
    } = req.body;
    const { id } = req.user;

    const user = await userServiceInstance.saveUserAddress({
      id,
      addressLine1,
      addressLine2,
      city,
      postalCode,
      country,
      telephoneNo,
      mobileNo,
    });
    if (!user) {
      res.send(400);
    }
    res.status(200).send(user);
  } catch (err) {
    console.error(err.message);
    console.log("Route layer");
    res.status(500).send("Server error");
  }
});

module.exports = router;
