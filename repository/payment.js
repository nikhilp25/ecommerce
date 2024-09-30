module.exports = class PaymentRepo {
  constructor(
    productInstance,
    productInventoryInstance,
    discountInstance,
    productCategoryInstance,
    userPaymentInstance
  ) {
    this.productInstance = productInstance;
    this.productInventoryInstance = productInventoryInstance;
    this.discountInstance = discountInstance;
    this.productCategoryInstance = productCategoryInstance;
    this.userPaymentInstance = userPaymentInstance;
  }
  // updatePaymentDetail = async (paymentData) => {
  //   const { id, paymentType, provider, acc_no, expiry } = paymentData;
  //   const data = await this.userPaymentInstance.create({
  //     name: name,
  //     desc: desc,
  //     SKU: SKU,
  //     category_id: categoryId,
  //     inventory_id: inventoryId,
  //     price: price,
  //     discount_id: discountId,
  //     created_at: new Date(Date.now()),
  //     modified_at: new Date(Date.now()),
  //     deleted_at: new Date(Date.now()),
  //   });
  // };
};
