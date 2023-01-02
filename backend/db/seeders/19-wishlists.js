"use strict";

const { Wishlist } = require("../models");

const wishlists = [
  {
    userId: 1,
    name: "MiniWishlist",
    privacy: "Public",
  },
  {
    userId: 2,
    name: "GiftPrefer",
    privacy: "Private",
  },
  {
    userId: 3,
    name: "WishCompass",
    privacy: "Public",
  },
  {
    userId: 4,
    name: "WishFiled",
    privacy: "Private",
  },
  {
    userId: 5,
    name: "MyUberUtopia",
    privacy: "Public",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Wishlist.bulkCreate(wishlists, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Wishlists", null, {});
  },
};
