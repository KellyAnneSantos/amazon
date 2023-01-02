"use strict";

const { Followership } = require("../models");

const followerships = [
  {
    userId: 1,
    followsUserId: 2,
    followingStatus: true,
  },
  {
    userId: 1,
    followsUserId: 3,
    followingStatus: true,
  },
  {
    userId: 1,
    followsUserId: 4,
    followingStatus: true,
  },
  {
    userId: 2,
    followsUserId: 5,
    followingStatus: true,
  },
  {
    userId: 2,
    followsUserId: 3,
    followingStatus: true,
  },
  {
    userId: 2,
    followsUserId: 4,
    followingStatus: true,
  },
  {
    userId: 3,
    followsUserId: 5,
    followingStatus: true,
  },
  {
    userId: 3,
    followsUserId: 1,
    followingStatus: true,
  },
  {
    userId: 3,
    followsUserId: 4,
    followingStatus: true,
  },
  {
    userId: 4,
    followsUserId: 5,
    followingStatus: true,
  },
  {
    userId: 4,
    followsUserId: 1,
    followingStatus: true,
  },
  {
    userId: 4,
    followsUserId: 2,
    followingStatus: true,
  },
  {
    userId: 5,
    followsUserId: 3,
    followingStatus: true,
  },
  {
    userId: 5,
    followsUserId: 1,
    followingStatus: true,
  },
  {
    userId: 5,
    followsUserId: 2,
    followingStatus: true,
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
