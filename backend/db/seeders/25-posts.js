"use strict";

const { Post } = require("../models");

const posts = [
  {
    influencerId: 4,
    caption: "Things To Do",
    previewImage:
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/houston/POST-Rooftop_0B5A9565-C536-8A96-ED1E963B9629F650-0b5a940cf46c982_0b5a9c8b-0051-4ee1-02cbcca16b778aea.jpg",
  },
  {
    influencerId: 4,
    caption: "Food, Culture, Workspace and Recreation",
    previewImage:
      "https://uploads-ssl.webflow.com/6074635e07fbbbc45f34a580/6324e14eacdd8efb927ff7e5_Home-SEO.jpg",
  },
  {
    influencerId: 4,
    caption: "Food, Culture, Workspace and Recreation",
    previewImage:
      "https://uploads-ssl.webflow.com/6074635e07fbbbc45f34a580/62e2bc24f2e642f7167c4802_Blackwood%20Farm_GMA2%20day.jpg",
  },
  {
    influencerId: 4,
    caption: "Latest Entertainment",
    previewImage:
      "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_4016,w_6016,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/POST_Construction_Updates_2021726_60_tdrxpv.jpg",
  },
  {
    influencerId: 4,
    caption: "post",
    previewImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Posts_on_the_saltmarsh%2C_Warton_Sands_-_geograph.org.uk_-_1658558.jpg",
  },
  {
    influencerId: 5,
    caption: "Food, Culture, Workspace and Recreation",
    previewImage:
      "https://uploads-ssl.webflow.com/6074635e07fbbbc45f34a580/62e063b3f3b33d5eca9d2b79_12_OMA_POST%20Houston_Photography%20by%20Scott%20Shigley-2400w-1200w.jpg",
  },
  {
    influencerId: 5,
    caption: "Popping",
    previewImage:
      "https://media1.houstonpress.com/hou/imager/u/original/12461357/post_view.jpg",
  },
  {
    influencerId: 5,
    caption: "Food, Culture, Workspace and Recreation",
    previewImage:
      "https://uploads-ssl.webflow.com/6074635e07fbbbc45f34a580/62e063b4d23ee43d672de32b_Leonid_Furmansky_OMA_THE_POST_Print_%2044-1200w.jpg",
  },
  {
    influencerId: 5,
    caption: "crowned",
    previewImage:
      "https://www.archpaper.com/wp-content/uploads/2021/11/04_OMA_POST-Houston_Photography-by-Leonid-Furmansky.jpg",
  },
  {
    influencerId: 5,
    caption: "A Post is a Post is a Post. Or is it?",
    previewImage:
      "http://www.blog.jimdoty.com/wp-content/uploads/170508-Delong-fence-post-o-Fark-001.jpg",
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
