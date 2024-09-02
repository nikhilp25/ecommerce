"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart_item.belongsTo(models.shopping_session, {
        foreignKey: "session_id",
      });
      cart_item.belongsTo(models.product, { foreignKey: "product_id" }); 
    }
  }
  cart_item.init(
    {
      session_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.STRING,
      created_at: DataTypes.DATE,
      modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "cart_item",
    }
  );
  return cart_item;
};
