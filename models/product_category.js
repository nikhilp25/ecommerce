"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product_category.hasMany(models.product, { foreignKey: "category_id" });
    }
  }
  product_category.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      desc: { type: DataTypes.TEXT, allowNull: false },
      created_at: { type: DataTypes.DATE, allowNull: false },
      modified_at: { type: DataTypes.DATE, allowNull: false },
      deleted_at: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "product_category",
    }
  );
  return product_category;
};
