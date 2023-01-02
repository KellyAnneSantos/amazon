"use strict";

const { Order } = require("../models");

const orders = [
  {
    userId: 4,
    billingAddress: "8420 Woodside St., Howell, NJ 07731",
    shippingAddress: "8255 Randall Mill Street, Elmont, NY 11003",
    cardType: "VISA",
    lastFour: "2761",
    status: "ordered",
  },
  {
    userId: 5,
    status: "cart",
  },
  {
    userId: 1,
    status: "cart",
  },
  {
    userId: 2,
    billingAddress: "7958 Lees Creek St., San Lorenzo, CA 94580",
    shippingAddress: "7921 Annadale Rd., Middleburg, FL 32068",
    cardType: "VISA",
    lastFour: "7691",
    status: "ordered",
  },
  {
    userId: 3,
    status: "cart",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Order.bulkCreate(orders, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
