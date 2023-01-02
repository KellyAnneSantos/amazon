"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Downvote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Downvote.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Downvote.belongsTo(models.Question, {
        foreignKey: "questionId",
      });
    }
  }
  Downvote.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      questionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      downvoteStatus: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Downvote",
    }
  );
  return Downvote;
};
