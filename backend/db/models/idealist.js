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
      IdeaList.belongsToMany(models.Product, {
        through: models.IdeaListProduct,
        foreignKey: "ideaListId",
        otherKey: "productId",
      });
      IdeaList.belongsTo(models.User, {
        foreignKey: "userId",
        // onDelete: "CASCADE",
        // hooks: true,
      });
      IdeaList.hasMany(models.Like, {
        foreignKey: "likeableId",
        constraints: false,
        scope: {
          likeableType: "ideaList",
        },
        onDelete: "CASCADE",
        hooks: true,
      });
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
