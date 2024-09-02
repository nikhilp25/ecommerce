const { where } = require("sequelize");

module.exports = class CartRepo {
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
  addProductToCart = async ({ productId, id, quantity }) => {
    try {
      console.log("-=-=-==->", id);
      const sessionData = await this.shoppingSessionInstance.findOne({
        where: { user_id: id },
      });
      console.log(sessionData);

      if (!sessionData) {
        return { message: "Invalid credentials" };
      }
      const session_id = sessionData.id;
      const data = await this.cartItemInstance.create({
        session_id: session_id,
        product_id: productId,
        quantity: quantity,
        created_at: new Date(Date.now()),
        modified_at: new Date(Date.now()),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      });
      return data;
    } catch (err) {
      throw err;
    }
  };
};
