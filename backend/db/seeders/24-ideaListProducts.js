"use strict";

const { IdeaListProduct } = require("../models");

const ideaListProducts = [
  {
    productId: 11,
    ideaListId: 1,
  },
  {
    productId: 12,
    ideaListId: 1,
  },
  {
    productId: 21,
    ideaListId: 2,
  },
  {
    productId: 22,
    ideaListId: 2,
  },
  {
    productId: 1,
    ideaListId: 3,
  },
  {
    productId: 2,
    ideaListId: 3,
  },
  {
    productId: 3,
    ideaListId: 4,
  },
  {
    productId: 4,
    ideaListId: 4,
  },
  {
    productId: 5,
    ideaListId: 5,
  },
  {
    productId: 6,
    ideaListId: 5,
  },
  {
    productId: 3,
    ideaListId: 6,
  },
  {
    productId: 4,
    ideaListId: 6,
  },
  {
    productId: 5,
    ideaListId: 7,
  },
  {
    productId: 6,
    ideaListId: 7,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await IdeaListProduct.bulkCreate(ideaListProducts, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("IdeaListProducts", null, {});
  },
};
