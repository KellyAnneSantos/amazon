"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IdeaListProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IdeaListProduct.init(
    {
      ideaListId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "IdeaListProduct",
    }
  );
  return IdeaListProduct;
};
