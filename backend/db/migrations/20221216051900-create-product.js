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
          "Alexa Skills",
          "Amazon Devices",
          "Amazon Fresh",
          "Amazon Pharmacy",
          "Amazon Warehouse",
          "Appliances",
          "Apps & Games",
          "Arts, Crafts & Sewing",
          "Audible Books & Originals",
          "Automotive Parts & Accessories",
          "Baby",
          "Beauty & Personal Care",
          "Books",
          "CDs & Vinyl",
          "Cell Phones & Accessories",
          "Clothing, Shoes & Jewelry",
          "Collectibles & Fine Art",
          "Computers",
          "Credit and Payment Cards",
          "Digital Education Resources",
          "Digital Music",
          "Electronics",
          "Garden & Outdoor",
          "Gift Cards",
          "Grocery & Gourmet Food",
          "Handmade",
          "Health, Household & Baby Care",
          "Home & Business Services",
          "Home & Kitchen",
          "Industrial & Scientific",
          "Just for Prime",
          "Kindle Store",
          "Luggage & Travel Gear",
          "Luxury Store",
          "Magazine Subscriptions",
          "Movies & TV",
          "Musical Instruments",
          "Office Products",
          "Online Learning",
          "Pet Supplies",
          "Premium Beauty",
          "Prime Video",
          "Smart Home",
          "Software",
          "Sports & Outdoors",
          "Garden & Outdoor",
          "Subscribe & Save",
          "Subscription Boxes",
          "Tools & Home Improvement",
          "Toys & Games",
          "Under $10",
          "Video Games",
          "Whole Foods Market"
        ),
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      size: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      color: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
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
      essential: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      deliveryPrice: {
        // allowNull: false,
        type: Sequelize.FLOAT,
      },
      deliveryTime: {
        // allowNull: false,
        type: Sequelize.INTEGER,
      },
      // returnTime: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
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
