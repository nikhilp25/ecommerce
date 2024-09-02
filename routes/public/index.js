const express = require("express");
const app = express();

const userRoute = require("./user");
const productRoute = require("./product");
const shoppingRoute = require("./shopping");
const cartRoute = require("./cart");

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/shopping", shoppingRoute);
app.use("/cart", cartRoute);

module.exports = app;
