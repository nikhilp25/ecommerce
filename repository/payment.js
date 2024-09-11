module.exports = class PaymentRepo {
  constructor(
    productInstance,
    productInventoryInstance,
    discountInstance,
    productCategoryInstance
  ) {
    this.productInstance = productInstance;
    this.productInventoryInstance = productInventoryInstance;
    this.discountInstance = discountInstance;
    this.productCategoryInstance = productCategoryInstance;
  }
};
