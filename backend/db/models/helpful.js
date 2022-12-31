"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Helpful extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Helpful",
    }
  );
  return Helpful;
};
