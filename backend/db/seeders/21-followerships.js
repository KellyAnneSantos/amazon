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
    await Followership.bulkCreate(followerships, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Followerships", null, {});
  },
};
