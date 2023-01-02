"use strict";

const { Upvote } = require("../models");

const upvotes = [
  {
    userId: 2,
    questionId: 1,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 1,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 1,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 2,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 2,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 3,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 3,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 3,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 4,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 4,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 5,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 5,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 5,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 6,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 6,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 7,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 7,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 7,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 8,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 8,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 9,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 9,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 9,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 10,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 10,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 11,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 11,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 11,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 12,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 12,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 13,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 13,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 13,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 14,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 14,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 15,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 15,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 15,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 16,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 16,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 17,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 17,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 17,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 18,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 18,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 19,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 19,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 19,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 20,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 20,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 21,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 21,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 21,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 22,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 22,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 23,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 23,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 23,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 24,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 24,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 25,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 25,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 25,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 26,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 26,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 27,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 27,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 27,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 28,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 28,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 29,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 29,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 29,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 30,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 30,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 31,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 31,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 31,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 32,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 32,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 33,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 33,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 33,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 34,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 34,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 35,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 35,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 35,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 36,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 36,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 37,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 37,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 37,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 38,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 38,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 39,
    upvoteStatus: true,
  },
  {
    userId: 3,
    questionId: 39,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 39,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 40,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 40,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 41,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 41,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 41,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 42,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 42,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 43,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 43,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 43,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 44,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 44,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 45,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 45,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 45,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 46,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 46,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 47,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 47,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 47,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 48,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 48,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 49,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 49,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 49,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 50,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 50,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 51,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 51,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 51,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 52,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 52,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 53,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 53,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 53,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 54,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 54,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 55,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 55,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 55,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 56,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 56,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 57,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 57,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 57,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 58,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 58,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 59,
    upvoteStatus: true,
  },
  {
    userId: 2,
    questionId: 59,
    upvoteStatus: true,
  },
  {
    userId: 4,
    questionId: 59,
    upvoteStatus: true,
  },
  {
    userId: 5,
    questionId: 60,
    upvoteStatus: true,
  },
  {
    userId: 1,
    questionId: 60,
    upvoteStatus: true,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Upvote.bulkCreate(upvotes, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Upvotes", null, {});
  },
};
