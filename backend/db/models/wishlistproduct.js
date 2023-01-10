"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WishlistProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WishlistProduct.belongsTo(models.Product, { foreignKey: "productId" });
      WishlistProduct.belongsTo(models.Wishlist, { foreignKey: "wishlistId" });
    }
  }
  WishlistProduct.init(
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      wishlistId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comment: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 255],
        },
      },
      priority: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "WishlistProduct",
    }
  );
  return WishlistProduct;
};
