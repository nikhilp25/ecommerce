module.exports = class ProductRepo {
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

  getAllProduct = async () => {
    try {
      return await this.productInstance.findAll({});
    } catch (err) {
      throw err;
    }
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
    try {
      const data = await this.productInstance.create({
        name: name,
        desc: desc,
        SKU: SKU,
        category_id: categoryId,
        inventory_id: inventoryId,
        price: price,
        discount_id: discountId,
        created_at: new Date(Date.now()),
        modified_at: new Date(Date.now()),
        deleted_at: new Date(Date.now()),
      });
      return data;
    } catch (err) {
      throw err;
    }
  };
};
