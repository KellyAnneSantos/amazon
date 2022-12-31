"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init(
    {
      likeableId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      likeableType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      likeStatus: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
