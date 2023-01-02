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
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
