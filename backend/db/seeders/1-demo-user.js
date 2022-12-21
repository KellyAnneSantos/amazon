"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Jermaine",
          lastName: "Atkins",
          merchant: true,
          merchantName: "Case Wake",
          email: "demo@user.io",
          // username: "Demo-lition",
          phone: 2029182132,
          prime: true,
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Oscar",
          lastName: "Ryan",
          merchant: true,
          merchantName: "Patient Sage",
          email: "user1@user.io",
          // username: "FakeUser1",
          phone: 4062353626,
          prime: false,
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          firstName: "Celine",
          lastName: "Walls",
          merchant: true,
          merchantName: "Picture Well",
          email: "user2@user.io",
          // username: "FakeUser2",
          phone: 5056448262,
          prime: false,
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          firstName: "Dawid",
          lastName: "Mcgrath",
          merchant: false,
          email: "user3@user.io",
          // username: "FakeUser2",
          phone: 5059857702,
          prime: false,
          hashedPassword: bcrypt.hashSync("password4"),
        },
        {
          firstName: "Alfie",
          lastName: "Serrano",
          merchant: false,
          email: "user4@user.io",
          // username: "FakeUser2",
          phone: 3265455545,
          prime: false,
          hashedPassword: bcrypt.hashSync("password5"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        email: {
          [Op.in]: [
            "demo@user.io",
            "user1@user.io",
            "user2@user.io",
            "user3@user.io",
            "user4@user.io",
          ],
        },
      },
      {}
    );
  },
};
