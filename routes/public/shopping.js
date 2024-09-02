const express = require("express");
const router = express.Router();
const { productServiceInstance } = require("../../services");
const authenticateJWT = require("../../auth/authMiddleware");

// router.get("/getAllProducts", authenticateJWT, async (req, res) => {
//   const data = await productServiceInstance.getAllProduct();
//   res.send(data);
// });

module.exports = router;
