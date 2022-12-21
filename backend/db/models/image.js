"use strict";
const { Model } = require("sequelize");
const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getImageable(options) {
      if (!this.imageableId) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.imageableType)}`;
      return this[mixinMethodName](options);
    }
    static associate(models) {
      Image.belongsTo(models.Product, {
        foreignKey: "imageableId",
        constraints: false,
      });
      Image.belongsTo(models.Review, {
        foreignKey: "imageableId",
        constraints: false,
      });
    }
  }
  Image.init(
    {
      imageableId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      imageableType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mediaType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mediaUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [5, 256],
        },
      },
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  Image.addHook("afterFind", (findResult) => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (
        instance.imageableType === "product" &&
        instance.product !== undefined
      ) {
        instance.imageable = instance.product;
      } else if (
        instance.imageableType === "review" &&
        instance.review !== undefined
      ) {
        instance.imageable = instance.review;
      }
      // To prevent mistakes:
      delete instance.product;
      delete instance.dataValues.product;
      delete instance.review;
      delete instance.dataValues.review;
    }
  });
  return Image;
};
