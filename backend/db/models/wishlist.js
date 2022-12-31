"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wishlist.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [4, 256],
        },
      },
      privacy: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      alexa: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      recipient: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      recipientName: {
        type: DataTypes.STRING,
        validate: {
          len: [4, 256],
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [10, 256],
        },
      },
      website: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [10, 256],
        },
      },
      month: DataTypes.STRING,
      day: DataTypes.INTEGER,
      shareSellers: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      buyersShip: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      listPurchased: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      spoilSurprises: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Wishlist",
    }
  );
  return Wishlist;
};
