"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shopping_session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shopping_session.belongsTo(models.user, { foreignKey: "user_id" });
      shopping_session.hasMany(models.cart_item, { foreignKey: "session_id" });
    }
  }
  shopping_session.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      total: { type: DataTypes.DECIMAL },
      created_at: { type: DataTypes.DATE },
      modified_at: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: "shopping_session",
    }
  );
  return shopping_session;
};
