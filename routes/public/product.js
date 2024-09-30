const express = require("express");
const router = express.Router();
const { productServiceInstance } = require("../../services");
const authenticateJWT = require("../../auth/authMiddleware");

router.get("/getAllProducts", async (req, res) => {
  const data = await productServiceInstance.getAllProduct();
  res.send(data);
});
router.post("/addProducts", authenticateJWT, async (req, res) => {
  try {
    const { name, desc, SKU, categoryId, inventoryId, price, discountId } =
      req.body;
    const data = await productServiceInstance.addProducts({
      name,
      desc,
      SKU,
      categoryId,
      inventoryId,
      price,
      discountId,
    });
    res.send(data);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
