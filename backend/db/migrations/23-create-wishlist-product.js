"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WishlistProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        allowNull: false,
        // onDelete: "CASCADE",
        references: {
          model: "Products",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      wishlistId: {
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Wishlists",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      priority: {
        allowNull: false,
        type: Sequelize.ENUM("lowest", "low", "medium", "high", "highest"),
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
    await queryInterface.dropTable("WishlistProducts");
  },
};
