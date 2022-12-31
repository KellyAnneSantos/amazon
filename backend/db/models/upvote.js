"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Upvote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Upvote.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      questionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      upvoteStatus: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Upvote",
    }
  );
  return Upvote;
};
