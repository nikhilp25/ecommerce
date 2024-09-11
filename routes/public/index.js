const express = require("express");
const app = express();

const userRoute = require("./user");
const productRoute = require("./product");
const shoppingRoute = require("./shopping");
const cartRoute = require("./cart");
const paymentRoute = require("./payment");

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/shopping", shoppingRoute);
app.use("/cart", cartRoute);
app.use("/payment", paymentRoute);

module.exports = app;
