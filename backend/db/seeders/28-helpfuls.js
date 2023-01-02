"use strict";

const { Helpful } = require("../models");

const helpfuls = [
  {
    userId: 2,
    helpableId: 1,
    helpableType: "review",
    helpfulStatus: true,
  },
  {
    userId: 3,
    helpableId: 2,
    helpableType: "review",
    helpfulStatus: true,
  },
  {
    userId: 4,
    helpableId: 3,
    helpableType: "review",
    helpfulStatus: true,
  },
  {
    userId: 5,
    helpableId: 4,
    helpableType: "review",
    helpfulStatus: true,
  },
  {
    userId: 1,
    helpableId: 5,
    helpableType: "review",
    helpfulStatus: true,
  },
  {
    userId: 2,
    helpableId: 6,
    helpableType: "review",
    helpfulStatus: true,
  },
  {
    userId: 3,
    helpableId: 7,
    helpableType: "review",
    helpfulStatus: true,
  },
  {
    userId: 2,
    helpableId: 1,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 3,
    helpableId: 2,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 1,
    helpableId: 3,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 2,
    helpableId: 4,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 1,
    helpableId: 5,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 2,
    helpableId: 6,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 3,
    helpableId: 7,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 1,
    helpableId: 8,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 2,
    helpableId: 9,
    helpableType: "answer",
    helpfulStatus: true,
  },
  {
    userId: 3,
    helpableId: 10,
    helpableType: "answer",
    helpfulStatus: true,
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
