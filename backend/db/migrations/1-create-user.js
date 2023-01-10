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
      fakeName: {
        allowNull: false,
        defaultValue: "Anonymous",
        type: Sequelize.STRING(30),
      },
      // merchant: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: Sequelize.BOOLEAN,
      // },
      // merchantName: {
      //   type: Sequelize.STRING(255),
      //   unique: true,
      // },
      // influencer: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: Sequelize.BOOLEAN,
      // },
      // username: {
      //   type: Sequelize.STRING(30),
      //   allowNull: false,
      //   unique: true,
      // },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(10),
        unique: true,
      },
      // prime: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: Sequelize.BOOLEAN,
      // },
      previewImage: {
        allowNull: false,
        defaultValue:
          "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg",
        type: Sequelize.STRING(255),
      },
      // backgroundImage: {
      //   type: Sequelize.STRING(255),
      // },
      // about: {
      //   type: Sequelize.STRING(255),
      // },
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
