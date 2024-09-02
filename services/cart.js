module.exports = class CartService {
  constructor(cartRepoInstance) {
    this.cartRepoInstance = cartRepoInstance;
  }

  addProductToCart = async ({ productId, id, quantity }) => {
    try {
      const data = await this.cartRepoInstance.addProductToCart({
        productId,
        id,
        quantity,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };
};
