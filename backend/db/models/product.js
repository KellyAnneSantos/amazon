"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      merchantId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [2, 256],
        },
      },
      department: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      size: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      color: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      dimensions: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
        },
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
      freeReturn: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      essential: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      deliveryPrice: DataTypes.FLOAT,
      deliveryTime: DataTypes.INTEGER,
      returnTime: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      previewImage: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [5, 256],
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
