"use strict";
const { Model } = require("sequelize");
const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;
module.exports = (sequelize, DataTypes) => {
  class Helpful extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getHelpable(options) {
      if (!this.helpableId) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.helpableType)}`;
      return this[mixinMethodName](options);
    }
    static associate(models) {
      Helpful.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Helpful.belongsTo(models.Answer, {
        foreignKey: "helpableId",
        constraints: false,
      });
      Helpful.belongsTo(models.Review, {
        foreignKey: "helpableId",
        constraints: false,
      });
    }
  }
  Helpful.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      helpableId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      helpableType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      helpfulStatus: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Helpful",
    }
  );
  Helpful.addHook("afterFind", (findResult) => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (instance.helpableType === "review" && instance.review !== undefined) {
        instance.helpable = instance.review;
      } else if (
        instance.helpableType === "answer" &&
        instance.answer !== undefined
      ) {
        instance.helpable = instance.answer;
      }
      // To prevent mistakes:
      delete instance.review;
      delete instance.dataValues.review;
      delete instance.answer;
      delete instance.dataValues.answer;
    }
  });
  return Helpful;
};
