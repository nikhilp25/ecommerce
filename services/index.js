const {
  userRepoInstance,
  productRepoInstance,
  shoppingRepoInstance,
  cartRepoInstance,
} = require("../repository");
const userService = require("./user");
const ProductService = require("./product");
const ShoppingService = require("./shopping");
const CartService = require("./cart");

const userServiceInstance = new userService(userRepoInstance);
const productServiceInstance = new ProductService(productRepoInstance);
const shoppingServiceInstance = new ShoppingService(shoppingRepoInstance);
const cartServiceInstance = new CartService(cartRepoInstance);

module.exports = {
  userServiceInstance,
  productServiceInstance,
  shoppingServiceInstance,
  cartServiceInstance,
};
