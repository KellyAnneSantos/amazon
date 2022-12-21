"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      merchant: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      merchantName: {
        type: Sequelize.STRING(256),
        unique: true,
      },
      // username: {
      //   type: Sequelize.STRING(30),
      //   allowNull: false,
      //   unique: true,
      // },
      email: {
        allowNull: false,
        type: Sequelize.STRING(256),
        unique: true,
      },
      phone: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
      },
      prime: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};