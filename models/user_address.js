"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_address.belongsTo(models.user, { foreignKey: "user_id" });
    }
  }
  user_address.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      user_id: DataTypes.INTEGER,
      address_line1: DataTypes.STRING,
      address_line2: DataTypes.STRING,
      city: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      country: DataTypes.STRING,
      telephone: DataTypes.STRING,
      mobile: DataTypes.STRING,
      created_at: DataTypes.DATE,
      modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user_address",
    }
  );
  return user_address;
};
