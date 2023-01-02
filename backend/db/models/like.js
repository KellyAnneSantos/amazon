"use strict";
const { Model } = require("sequelize");
const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getLikeable(options) {
      if (!this.likeableId) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.likeableType)}`;
      return this[mixinMethodName](options);
    }
    static associate(models) {
      Like.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Like.belongsTo(models.Post, {
        foreignKey: "likeableId",
        constraints: false,
      });
      Like.belongsTo(models.IdeaList, {
        foreignKey: "likeableId",
        constraints: false,
      });
    }
  }
  Like.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
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
  Like.addHook("afterFind", (findResult) => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (instance.likeableType === "post" && instance.post !== undefined) {
        instance.likeable = instance.post;
      } else if (
        instance.likeableType === "ideaList" &&
        instance.ideaList !== undefined
      ) {
        instance.likeable = instance.ideaList;
      }
      // To prevent mistakes:
      delete instance.post;
      delete instance.dataValues.post;
      delete instance.ideaList;
      delete instance.dataValues.ideaList;
    }
  });
  return Like;
};
