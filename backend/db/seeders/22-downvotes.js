"use strict";

const { Downvote } = require("../models");

const downvotes = [
  {
    userId: 1,
    questionId: 1,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 2,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 3,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 4,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 5,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 6,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 7,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 8,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 9,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 10,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 11,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 12,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 13,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 14,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 15,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 16,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 17,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 18,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 19,
    downvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 20,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 21,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 22,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 23,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 24,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 25,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 26,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 27,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 28,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 29,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 30,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 31,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 32,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 33,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 34,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 35,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 36,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 37,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 38,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 39,
    downvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 40,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 41,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 42,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 43,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 44,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 45,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 46,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 47,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 48,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 49,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 50,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 51,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 52,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 53,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 54,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 55,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 56,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 57,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 58,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 59,
    downvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 60,
    downvoteStatus: true,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Downvote.bulkCreate(downvotes, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Downvotes", null, {});
  },
};
