const cartItemInstance = require("../models").cart_item;
const discountInstance = require("../models").discount;
const orderDetailsInstance = require("../models").order_details;
const orderItemsInstance = require("../models").order_item;
const paymentDetailsInstance = require("../models").payment_details;
const productCategoryInstance = require("../models").product_category;
const productInventoryInstance = require("../models").product_inventory;
const productInstance = require("../models").product;
const shoppingSessionInstance = require("../models").shopping_session;
const userAddressInstance = require("../models").user_address;
const userPaymentInstance = require("../models").user_payment;
const userInstance = require("../models").user;

const UserRepo = require("./user");
const ProductRepo = require("./product");
const ShoppingRepo = require("./shopping");
const CartRepo = require("./cart");
const PaymentRepo = require("./payment");

const userRepoInstance = new UserRepo(
  userInstance,
  shoppingSessionInstance,
  userAddressInstance
);
const productRepoInstance = new ProductRepo(
  productInstance,
  productInventoryInstance,
  discountInstance,
  productCategoryInstance
);
const shoppingRepoInstance = new ShoppingRepo(
  userInstance,
  productInstance,
  shoppingSessionInstance,
  cartItemInstance
);
const cartRepoInstance = new CartRepo(
  userInstance,
  productInstance,
  shoppingSessionInstance,
  cartItemInstance
);
const paymentRepoInstance = new PaymentRepo(
  userInstance,
  productInstance,
  shoppingSessionInstance,
  cartItemInstance
);

module.exports = {
  userRepoInstance,
  productRepoInstance,
  shoppingRepoInstance,
  cartRepoInstance,
  paymentRepoInstance,
};
