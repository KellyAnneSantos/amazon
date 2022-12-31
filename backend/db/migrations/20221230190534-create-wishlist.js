"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Wishlists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      privacy: {
        allowNull: false,
        type: Sequelize.ENUM("Public", "Shared", "Private"),
      },
      alexa: {
        allowNull: false,
        type: Sequelize.ENUM(
          "Alexa can add items to your list",
          "Alexa can add items and read your list",
          "Don't manage this list through Alexa"
        ),
      },
      recipient: {
        allowNull: false,
        type: Sequelize.ENUM("You", "Organization"),
      },
      recipientName: {
        type: Sequelize.STRING(256),
      },
      email: {
        type: Sequelize.STRING(256),
      },
      website: {
        type: Sequelize.STRING(256),
      },
      month: {
        type: Sequelize.ENUM(
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ),
      },
      day: {
        type: Sequelize.INTEGER,
      },
      shareSellers: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      buyersShip: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      listPurchased: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      spoilSurprises: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Wishlists");
  },
};
