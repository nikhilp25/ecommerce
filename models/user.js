"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.user_address, { foreignKey: "user_id" });
      user.hasMany(models.user_payment, { foreignKey: "user_id" });
      user.hasMany(models.shopping_session, { foreignKey: "user_id" });
      user.hasMany(models.order_details, { foreignKey: "user_id" });
    }
  }
  user.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      mobileNo: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
