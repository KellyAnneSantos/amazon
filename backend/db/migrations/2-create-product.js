"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      merchantId: {
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
      department: {
        allowNull: false,
        type: Sequelize.ENUM(
          "Alexa",
          "Appliances",
          "Arts",
          "Audible",
          "Auto",
          "Baby",
          "Beauty",
          "Books",
          "CDs",
          "Cellular",
          "Clothing",
          "Collectibles",
          "Computers",
          "Credit",
          "Devices",
          "Electronics",
          "Education",
          "Games",
          "Garden",
          "Grocery",
          "Handmade",
          "Health",
          "Home",
          "Industrial",
          "Kindle",
          "Luxury",
          "Magazines",
          "Music",
          "Office",
          "Pets",
          "Pharmacy",
          "Prime",
          "Services",
          "Software",
          "Sports",
          "Tools",
          "Toys",
          "Travel",
          "Video",
          "Warehouse"
        ),
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      // size: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: Sequelize.BOOLEAN,
      // },
      // color: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: Sequelize.BOOLEAN,
      // },
      // dimensions: {
      //   allowNull: false,
      //   type: Sequelize.STRING(100),
      // },
      // weight: {
      //   allowNull: false,
      //   type: Sequelize.STRING(100),
      // },
      // modelNumber: {
      //   allowNull: false,
      //   type: Sequelize.STRING(100),
      // },
      description: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      freeReturn: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      // essential: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: Sequelize.BOOLEAN,
      // },
      // deliveryPrice: {
      // allowNull: false,
      //   type: Sequelize.FLOAT,
      // },
      // deliveryTime: {
      // allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
      // returnTime: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
      prime: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      // song: {
      //   allowNull: false,
      //   defaultValue: false,
      //   type: Sequelize.BOOLEAN,
      // },
      // artist: {
      //   type: Sequelize.STRING(256),
      // },
      // url: {
      //   type: Sequelize.STRING(256),
      // },
      previewImage: {
        allowNull: false,
        type: Sequelize.STRING(256),
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
    await queryInterface.dropTable("Products");
  },
};
