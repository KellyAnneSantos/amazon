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
      // define association here
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
          len: [1, 256],
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
