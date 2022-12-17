"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductOrders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Products",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      orderId: {
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Orders",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      size: {
        type: Sequelize.STRING(25),
      },
      color: {
        type: Sequelize.STRING(25),
      },
      deliveryPrice: {
        // allowNull: false,
        type: Sequelize.FLOAT,
      },
      deliveryTime: {
        // allowNull: false,
        type: Sequelize.INTEGER,
      },
      amazonPackaging: {
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
    await queryInterface.dropTable("ProductOrders");
  },
};
