"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Review.belongsTo(models.Product, {
        foreignKey: "productId",
      });
      Review.hasMany(models.Image, {
        foreignKey: "imageableId",
        constraints: false,
        scope: {
          imageableType: "review",
        },
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Review.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      stars: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      headline: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
      previewImage: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [5, 256],
        },
      },
      body: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
