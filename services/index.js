const {
  userRepoInstance,
  productRepoInstance,
  shoppingRepoInstance,
  cartRepoInstance,
  paymentRepoInstance,
} = require("../repository");
const userService = require("./user");
const ProductService = require("./product");
const ShoppingService = require("./shopping");
const CartService = require("./cart");
const PaymentService = require("./payment");

const userServiceInstance = new userService(userRepoInstance);
const productServiceInstance = new ProductService(productRepoInstance);
const shoppingServiceInstance = new ShoppingService(shoppingRepoInstance);
const cartServiceInstance = new CartService(cartRepoInstance);
const paymentServiceInstance = new PaymentService(paymentRepoInstance);

module.exports = {
  userServiceInstance,
  productServiceInstance,
  shoppingServiceInstance,
  cartServiceInstance,
  paymentServiceInstance,
};
