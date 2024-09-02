module.exports = class ProductService {
  constructor(productRepoInstance) {
    this.productRepoInstance = productRepoInstance;
  }
  getAllProduct = async () => {
    const allProduct = this.productRepoInstance.getAllProduct();
    return allProduct;
  };
  addProducts = async ({
    name,
    desc,
    SKU,
    categoryId,
    inventoryId,
    price,
    discountId,
  }) => {
    const allProduct = this.productRepoInstance.addProducts({
      name,
      desc,
      SKU,
      categoryId,
      inventoryId,
      price,
      discountId,
    });
    return allProduct;
  };
};
