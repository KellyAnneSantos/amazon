"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Answer.belongsTo(models.Question, {
        foreignKey: "questionId",
      });
      Answer.hasMany(models.Helpful, {
        foreignKey: "helpableId",
        constraints: false,
        scope: {
          helpableType: "answer",
        },
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Answer.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      questionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      body: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 255],
        },
      },
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
