"use strict";

const { ProductOrder } = require("../models");

const productOrders = [
  {
    productId: 1,
    orderId: 1,
    quantity: 2,
  },
  {
    productId: 2,
    orderId: 2,
    quantity: 1,
  },
  {
    productId: 7,
    orderId: 1,
    quantity: 2,
  },
  {
    productId: 3,
    orderId: 3,
    quantity: 2,
  },
  {
    productId: 4,
    orderId: 4,
    quantity: 1,
  },
  {
    productId: 8,
    orderId: 4,
    quantity: 1,
  },
  {
    productId: 5,
    orderId: 5,
    quantity: 2,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await ProductOrder.bulkCreate(productOrders, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProductOrders", null, {});
  },
};
