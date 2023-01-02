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
      Wishlist.belongsToMany(models.Product, {
        through: models.WishlistProduct,
        foreignKey: "productId",
        otherKey: "wishlistId",
      });
      Wishlist.hasMany(models.WishlistProduct, {
        foreignKey: "wishlistId",
        onDelete: "CASCADE",
        hooks: true,
      });
      Wishlist.belongsTo(models.User, {
        foreignKey: "userId",
      });
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
    },
    {
      sequelize,
      modelName: "Wishlist",
    }
  );
  return Wishlist;
};
