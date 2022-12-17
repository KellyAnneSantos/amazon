'use strict';
const {
  Model
} = require('sequelize');
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
  Product.init({
    merchantId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    size: DataTypes.BOOLEAN,
    color: DataTypes.BOOLEAN,
    freeReturn: DataTypes.BOOLEAN,
    subscribe: DataTypes.BOOLEAN,
    essential: DataTypes.BOOLEAN,
    deliveryPrice: DataTypes.INTEGER,
    deliveryTime: DataTypes.INTEGER,
    returnTime: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};