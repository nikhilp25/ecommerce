"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.product_category, { foreignKey: "category_id" });
      product.belongsTo(models.product_inventory, {
        foreignKey: "inventory_id",
      });
      product.belongsTo(models.discount, { foreignKey: "discount_id" });
      product.hasMany(models.cart_item, { foreignKey: "product_id" });
      product.hasMany(models.order_items, { foreignKey: "product_id" });
    }
  }
  product.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      desc: { type: DataTypes.TEXT, allowNull: false },
      SKU: { type: DataTypes.STRING, allowNull: false },
      category_id: { type: DataTypes.INTEGER, allowNull: false },
      inventory_id: { type: DataTypes.INTEGER, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      discount_id: { type: DataTypes.INTEGER, allowNull: false },
      created_at: { type: DataTypes.DATE, allowNull: false },
      modified_at: { type: DataTypes.DATE, allowNull: false },
      deleted_at: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
