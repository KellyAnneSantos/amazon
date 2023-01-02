"use strict";

const { Like } = require("../models");

const likes = [
  {
    userId: 2,
    likeableId: 1,
    likeableType: "ideaList",
    likeStatus: true,
  },
  {
    userId: 3,
    likeableId: 2,
    likeableType: "ideaList",
    likeStatus: true,
  },
  {
    userId: 4,
    likeableId: 3,
    likeableType: "ideaList",
    likeStatus: true,
  },
  {
    userId: 5,
    likeableId: 4,
    likeableType: "ideaList",
    likeStatus: true,
  },
  {
    userId: 1,
    likeableId: 5,
    likeableType: "ideaList",
    likeStatus: true,
  },
  {
    userId: 2,
    likeableId: 6,
    likeableType: "ideaList",
    likeStatus: true,
  },
  {
    userId: 3,
    likeableId: 7,
    likeableType: "ideaList",
    likeStatus: true,
  },
  {
    userId: 2,
    likeableId: 1,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 3,
    likeableId: 2,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 1,
    likeableId: 3,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 2,
    likeableId: 4,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 1,
    likeableId: 5,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 2,
    likeableId: 6,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 3,
    likeableId: 7,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 1,
    likeableId: 8,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 2,
    likeableId: 9,
    likeableType: "post",
    likeStatus: true,
  },
  {
    userId: 3,
    likeableId: 10,
    likeableType: "post",
    likeStatus: true,
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
