module.exports = class ShoppingRepo {
  constructor(
    userInstance,
    productInstance,
    shoppingSessionInstance,
    cartItemInstance
  ) {
    this.userInstance = userInstance;
    this.productInstance = productInstance;
    this.shoppingSessionInstance = shoppingSessionInstance;
    this.cartItemInstance = cartItemInstance;
  }
};
