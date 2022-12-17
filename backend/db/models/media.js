"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Media.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      imageableId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      imageableType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mediaType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mediaUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [5, 256],
        },
      },
    },
    {
      sequelize,
      modelName: "Media",
    }
  );
  return Media;
};
