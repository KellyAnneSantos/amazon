"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Question.belongsTo(models.Product, {
        foreignKey: "productId",
      });
      Question.hasMany(models.Upvote, {
        foreignKey: "questionId",
        onDelete: "CASCADE",
        hooks: true,
      });
      Question.hasMany(models.Downvote, {
        foreignKey: "questionId",
        onDelete: "CASCADE",
        hooks: true,
      });
      Question.hasMany(models.Answer, {
        foreignKey: "questionId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Question.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      body: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
