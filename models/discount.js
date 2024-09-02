"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      discount.hasMany(models.product, { foreignKey: "discount_id" });
    }
  }
  discount.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      desc: DataTypes.TEXT,
      discount_percent: DataTypes.DECIMAL,
      active: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE,
      modified_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "discount",
    }
  );
  return discount;
};
