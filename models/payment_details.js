"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment_details.belongsTo(models.order_details, {
        foreignKey: "order_id",
      });
    }
  }
  payment_details.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      order_id: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
      provider: DataTypes.STRING,
      status: DataTypes.STRING,
      created_at: DataTypes.DATE,
      modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "payment_details",
    }
  );
  return payment_details;
};
