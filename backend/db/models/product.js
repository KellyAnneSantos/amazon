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
      Product.belongsTo(models.User, {
        foreignKey: "merchantId",
      });
      Product.hasMany(models.Review, {
        foreignKey: "productId",
        // onDelete: "CASCADE",
        // hooks: true,
      });
      Product.hasMany(models.Image, {
        foreignKey: "imageableId",
        constraints: false,
        scope: {
          imageableType: "product",
        },
        // onDelete: "CASCADE",
        // hooks: true,
      });
      Product.belongsToMany(models.Order, {
        through: models.ProductOrder,
        foreignKey: "productId",
        otherKey: "orderId",
      });
      Product.hasMany(models.ProductOrder, {
        foreignKey: "productId",
      });
      Product.hasMany(models.Description, {
        foreignKey: "productId",
        // onDelete: "CASCADE",
        // hooks: true,
      });
      Product.hasMany(models.Question, {
        foreignKey: "productId",
        // onDelete: "CASCADE",
        // hooks: true,
      });
      Product.belongsToMany(models.Wishlist, {
        through: models.WishlistProduct,
        foreignKey: "productId",
        otherKey: "wishlistId",
      });
      Product.hasMany(models.WishlistProduct, {
        foreignKey: "productId",
      });
      Product.belongsToMany(models.IdeaList, {
        through: models.IdeaListProduct,
        foreignKey: "productId",
        otherKey: "ideaListId",
      });
      Product.belongsToMany(models.Post, {
        through: models.PostProduct,
        foreignKey: "productId",
        otherKey: "postId",
      });
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
      // size: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: DataTypes.BOOLEAN,
      // },
      // color: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: DataTypes.BOOLEAN,
      // },
      // dimensions: {
      //   allowNull: false,
      //   type: DataTypes.STRING,
      //   validate: {
      //     len: [3, 100],
      //   },
      // },
      // weight: {
      //   allowNull: false,
      //   type: DataTypes.STRING,
      //   validate: {
      //     len: [4, 100],
      //   },
      // },
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
      // essential: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: DataTypes.BOOLEAN,
      // },
      // deliveryPrice: DataTypes.FLOAT,
      // deliveryTime: DataTypes.INTEGER,
      // returnTime: {
      //   allowNull: false,
      //   type: DataTypes.INTEGER,
      // },
      prime: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      // song: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: DataTypes.BOOLEAN,
      // },
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
