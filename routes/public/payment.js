const express = require("express");
const router = express.Router();
const { paymentServiceInstance } = require("../../services");
const authenticateJWT = require("../../auth/authMiddleware");

router.post("/checkout", authenticateJWT, async (req, res) => {
  try {
    // req body
    // [
    //   { name: "Tshirt", price: 200, quantity: 2 },
    //   { name: "Top", price: 400, quantity: 1 },
    //   { name: "Mobile", price: 10000, quantity: 1 },
    //   { name: "TV", price: 12000, quantity: 1 },
    // ];
    const cartItem = req.body.cartItem;
    const payment = await paymentServiceInstance.makePayment(cartItem);
    res.send(payment);
  } catch (err) {
    throw err;
  }
});
router.get("/success", async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    const result = await paymentServiceInstance.getSuccessData(sessionId);
    console.log(result);
    res.send("Payment was successful");
  } catch (err) {
    throw err;
  }
});
module.exports = router;
