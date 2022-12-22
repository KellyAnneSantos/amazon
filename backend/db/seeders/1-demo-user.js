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
          phone: 9182132,
          prime: true,
          previewImage:
            "https://static.hudl.com/users/temp/12975044_0aaeafec97654ae6a681bbfaa43b682a.jpg",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Oscar",
          lastName: "Ryan",
          merchant: true,
          merchantName: "Patient Sage",
          email: "user1@user.io",
          // username: "FakeUser1",
          phone: 2353626,
          prime: false,
          previewImage:
            "https://livelongerthepodcast.com/wp-content/uploads/2021/07/OJRyan.jpg",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          firstName: "Celine",
          lastName: "Walls",
          merchant: true,
          merchantName: "Picture Well",
          email: "user2@user.io",
          // username: "FakeUser2",
          phone: 6448262,
          prime: false,
          previewImage: "https://i.ytimg.com/vi/gf-vX3Czzbo/maxresdefault.jpg",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          firstName: "Dawid",
          lastName: "Mcgrath",
          merchant: false,
          email: "user3@user.io",
          // username: "FakeUser2",
          phone: 9857702,
          prime: false,
          previewImage:
            "https://www.nhms.com/images/David%20McGrath%202020%201200x1200b.jpg",
          hashedPassword: bcrypt.hashSync("password4"),
        },
        {
          firstName: "Alfie",
          lastName: "Serrano",
          merchant: false,
          email: "user4@user.io",
          // username: "FakeUser2",
          phone: 5455545,
          prime: false,
          previewImage:
            "https://images.findagrave.com/photos250/photos/2020/310/218017858_019d20b7-ce66-4a6b-9960-ce9998681d8b.jpeg",
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
