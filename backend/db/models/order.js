"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      billingAddress: {
        type: DataTypes.STRING,
        validate: {
          len: [4, 256],
        },
      },
      shippingAddress: {
        type: DataTypes.STRING,
        validate: {
          len: [4, 256],
        },
      },
      cardType: {
        type: DataTypes.STRING,
      },
      lastFour: DataTypes.INTEGER,
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
