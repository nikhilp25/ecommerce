"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_payment.belongsTo(models.user, { foreignKey: "user_id" });
    }
  }
  user_payment.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      user_id: DataTypes.INTEGER,
      payment_type: DataTypes.STRING,
      provider: DataTypes.STRING,
      account_no: DataTypes.STRING,
      expiry: DataTypes.DATE,
      created_at: DataTypes.DATE,
      modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user_payment",
    }
  );
  return user_payment;
};
