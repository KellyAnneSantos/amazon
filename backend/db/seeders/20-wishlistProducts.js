"use strict";

const { WishlistProduct } = require("../models");

const wishlistProducts = [
  {
    productId: 11,
    wishlistId: 1,
    comment: "please",
    priority: "lowest",
  },
  {
    productId: 12,
    wishlistId: 1,
    comment: "please",
    priority: "low",
  },
  {
    productId: 21,
    wishlistId: 2,
    comment: "please",
    priority: "medium",
  },
  {
    productId: 22,
    wishlistId: 2,
    comment: "please",
    priority: "high",
  },
  {
    productId: 1,
    wishlistId: 3,
    comment: "please",
    priority: "highest",
  },
  {
    productId: 2,
    wishlistId: 3,
    comment: "please",
    priority: "lowest",
  },
  {
    productId: 3,
    wishlistId: 4,
    comment: "please",
    priority: "low",
  },
  {
    productId: 4,
    wishlistId: 4,
    comment: "please",
    priority: "medium",
  },
  {
    productId: 5,
    wishlistId: 5,
    comment: "please",
    priority: "high",
  },
  {
    productId: 6,
    wishlistId: 5,
    comment: "please",
    priority: "high",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await WishlistProduct.bulkCreate(wishlistProducts, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("WishlistProducts", null, {});
  },
};
