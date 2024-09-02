"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_items.belongsTo(models.order_details, { foreignKey: "order_id" });
      order_items.belongsTo(models.product, { foreignKey: "product_id" });
    }
  }
  order_items.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.STRING,
      created_at: DataTypes.DATE,
      modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "order_items",
    }
  );
  return order_items;
};
