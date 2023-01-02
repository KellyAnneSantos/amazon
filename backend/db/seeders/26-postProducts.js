"use strict";

const { PostProduct } = require("../models");

const postProducts = [
  {
    productId: 11,
    postId: 1,
  },
  {
    productId: 12,
    postId: 1,
  },
  {
    productId: 21,
    postId: 2,
  },
  {
    productId: 22,
    postId: 2,
  },
  {
    productId: 1,
    postId: 3,
  },
  {
    productId: 2,
    postId: 3,
  },
  {
    productId: 3,
    postId: 4,
  },
  {
    productId: 4,
    postId: 4,
  },
  {
    productId: 5,
    postId: 5,
  },
  {
    productId: 6,
    postId: 5,
  },
  {
    productId: 7,
    postId: 6,
  },
  {
    productId: 8,
    postId: 6,
  },
  {
    productId: 9,
    postId: 7,
  },
  {
    productId: 10,
    postId: 7,
  },
  {
    productId: 5,
    postId: 8,
  },
  {
    productId: 6,
    postId: 8,
  },
  {
    productId: 7,
    postId: 9,
  },
  {
    productId: 8,
    postId: 9,
  },
  {
    productId: 9,
    postId: 10,
  },
  {
    productId: 10,
    postId: 10,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await PostProduct.bulkCreate(postProducts, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PostProducts", null, {});
  },
};
