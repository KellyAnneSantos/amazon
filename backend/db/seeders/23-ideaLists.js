"use strict";

const { IdeaList } = require("../models");

const ideaLists = [
  {
    userId: 1,
    name: "Listthen",
    description:
      "we constantly update our selection of the best products so that you can always find what you're looking for",
  },
  {
    userId: 2,
    name: "Listlove",
    description:
      "The idea list is a tool for keeping track of items you want but don't yet own.",
  },
  {
    userId: 3,
    name: "Listthen",
    description:
      "It's a great way to stay organized, saving you time and hassle.",
  },
  {
    userId: 4,
    name: "Listlove",
    description:
      "we constantly update our selection of the best products so that you can always find what you're looking for",
  },
  {
    userId: 4,
    name: "Listthen",
    description:
      "The idea list is a tool for keeping track of items you want but don't yet own.",
  },
  {
    userId: 5,
    name: "Listlove",
    description:
      "It's a great way to stay organized, saving you time and hassle.",
  },
  {
    userId: 5,
    name: "Listthen",
    description:
      "we constantly update our selection of the best products so that you can always find what you're looking for",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await IdeaList.bulkCreate(ideaLists, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("IdeaLists", null, {});
  },
};
