"use strict";

const { ProductOrder } = require("../models");

const productOrders = [
  {
    productId: 1,
    orderId: 1,
    quantity: 2,
    amazonPackaging: false,
  },
  {
    productId: 2,
    orderId: 2,
    quantity: 1,
    amazonPackaging: false,
  },
  {
    productId: 7,
    orderId: 1,
    quantity: 2,
    amazonPackaging: false,
  },
  {
    productId: 3,
    orderId: 3,
    quantity: 2,
    amazonPackaging: false,
  },
  {
    productId: 4,
    orderId: 4,
    quantity: 1,
    amazonPackaging: false,
  },
  {
    productId: 8,
    orderId: 4,
    quantity: 1,
    amazonPackaging: false,
  },
  {
    productId: 5,
    orderId: 5,
    quantity: 2,
    amazonPackaging: false,
  },
  {
    productId: 6,
    orderId: 6,
    quantity: 1,
    amazonPackaging: true,
  },
  {
    productId: 9,
    orderId: 6,
    quantity: 2,
    amazonPackaging: false,
  },
  {
    productId: 10,
    orderId: 6,
    quantity: 1,
    amazonPackaging: false,
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
