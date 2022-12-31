"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Followership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Followership.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Followership.belongsTo(models.User, {
        foreignKey: "followsUserId",
      });
    }
  }
  Followership.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      followsUserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      followingStatus: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Followership",
    }
  );
  return Followership;
};
