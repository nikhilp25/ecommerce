"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product_inventory.hasMany(models.product, { foreignKey: "inventory_id" });
    }
  }
  product_inventory.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      created_at: DataTypes.DATE,
      modified_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "product_inventory",
    }
  );
  return product_inventory;
};
