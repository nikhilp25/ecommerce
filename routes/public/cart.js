const express = require("express");
const router = express.Router();
const { cartServiceInstance } = require("../../services");
const authenticateJWT = require("../../auth/authMiddleware");

router.post("/addProductToCart", authenticateJWT, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const { id } = req.user;

    const data = await cartServiceInstance.addProductToCart({
      productId,
      id,
      quantity,
    });
    res.send(data);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
