"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductOrder.belongsTo(models.Product, { foreignKey: "productId" });
      ProductOrder.belongsTo(models.Order, { foreignKey: "orderId" });
    }
  }
  ProductOrder.init(
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      size: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 25],
        },
      },
      color: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 25],
        },
      },
      deliveryPrice: {
        type: DataTypes.FLOAT,
      },
      deliveryTime: DataTypes.INTEGER,
      amazonPackaging: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "ProductOrder",
    }
  );
  return ProductOrder;
};
