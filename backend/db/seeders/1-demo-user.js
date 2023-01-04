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
          fakeName: "Frank",
          merchant: true,
          merchantName: "Case Wake",
          influencer: false,
          email: "demo@user.io",
          // username: "Demo-lition",
          phone: "9182132",
          prime: true,
          previewImage:
            "https://static.hudl.com/users/temp/12975044_0aaeafec97654ae6a681bbfaa43b682a.jpg",
          backgroundImage:
            "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
          about: "Our Favorite Products That We Recommend",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Oscar",
          lastName: "Ryan",
          fakeName: "Malcolm",
          merchant: true,
          merchantName: "Patient Sage",
          influencer: false,
          email: "user1@user.io",
          // username: "FakeUser1",
          phone: "2353626",
          prime: false,
          previewImage:
            "https://livelongerthepodcast.com/wp-content/uploads/2021/07/OJRyan.jpg",
          backgroundImage:
            "https://i.pinimg.com/564x/a5/2e/3e/a52e3ead549f0fef288d9d074b979df2--computer.jpg",
          about: "The Amazon store of Malcolm",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          firstName: "Celine",
          lastName: "Walls",
          fakeName: "Caroline",
          merchant: true,
          merchantName: "Picture Well",
          influencer: false,
          email: "user2@user.io",
          // username: "FakeUser2",
          phone: "6448262",
          prime: false,
          previewImage: "https://i.ytimg.com/vi/gf-vX3Czzbo/maxresdefault.jpg",
          backgroundImage:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          about:
            "Fashion influencer and stylist, sharing affordable fashion finds! Amazon Must Have Mondays every week on Instagram and TikTok",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          firstName: "Dawid",
          lastName: "Mcgrath",
          fakeName: "Kristofer",
          merchant: false,
          // merchantName: "Randall Unlimited",
          influencer: true,
          email: "user3@user.io",
          // username: "FakeUser2",
          phone: "9857702",
          prime: false,
          previewImage:
            "https://www.nhms.com/images/David%20McGrath%202020%201200x1200b.jpg",
          backgroundImage:
            "https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg",
          about: "Vegan cooking classes with award-winning Chef Kristofer",
          hashedPassword: bcrypt.hashSync("password4"),
        },
        {
          firstName: "Alfie",
          lastName: "Serrano",
          fakeName: "Dan",
          merchant: false,
          // merchantName: "Forest Ferguson Associates",
          influencer: true,
          email: "user4@user.io",
          // username: "FakeUser2",
          phone: "5455545",
          prime: false,
          previewImage:
            "https://images.findagrave.com/photos250/photos/2020/310/218017858_019d20b7-ce66-4a6b-9960-ce9998681d8b.jpeg",
          backgroundImage: "https://wallpaperaccess.com/full/187161.jpg",
          about: "Enhance your life",
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
