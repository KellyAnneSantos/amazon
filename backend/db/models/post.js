"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      influencerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      caption: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
      previewImage: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [5, 256],
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
