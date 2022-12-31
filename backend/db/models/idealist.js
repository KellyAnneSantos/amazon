"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IdeaList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IdeaList.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
    },
    {
      sequelize,
      modelName: "IdeaList",
    }
  );
  return IdeaList;
};
