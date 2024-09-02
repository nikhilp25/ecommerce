"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_details.belongsTo(models.user, { foreignKey: "user_id" });
      order_details.hasMany(models.order_items, { foreignKey: "order_id" });
      order_details.belongsTo(models.payment_details, {
        foreignKey: "payment_id",
      });
    }
  }
  order_details.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      user_id: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
      payment_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "order_details",
    }
  );
  return order_details;
};
