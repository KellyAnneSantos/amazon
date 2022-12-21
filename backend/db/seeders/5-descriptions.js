"use strict";

const { Description } = require("../models");

const descriptions = [
  {
    merchantId: 1,
    productId: 1,
    bulletPoint:
      "Satisfaction Assurance - We are so confident in the quality of our product that we offer a 30-day satisfaction period no questions asked and Full 1 year coverage - so buy now!",
  },
  {
    merchantId: 1,
    productId: 2,
    bulletPoint:
      "100% Satisfaction: We want you to love, be yourself, and live inspired by all of our cozy socks. But if for some reason, you’re not feeling oh so comfy, we offer product exchanges and full refunds within 30 days from delivery.",
  },
  {
    merchantId: 1,
    productId: 3,
    bulletPoint: "Pull On closure",
  },
  {
    merchantId: 1,
    productId: 4,
    bulletPoint: "indoor",
  },
  {
    merchantId: 1,
    productId: 5,
    bulletPoint: "A single battery charge lasts weeks, not hours.",
  },
  {
    merchantId: 1,
    productId: 6,
    bulletPoint:
      "VERSATILE: This is the PERFECT appliance for picky eaters, large families, or those who have busy schedules.",
  },
  {
    merchantId: 1,
    productId: 7,
    bulletPoint:
      "Beautifully bound in an earthy latte-colored cloth this charming journal is for the free-spirited traveler who wants to document their journey in a chic yet simple way.",
  },
  {
    merchantId: 1,
    productId: 8,
    bulletPoint: "Made of leather or suede uppers",
  },
  {
    merchantId: 1,
    productId: 9,
    bulletPoint:
      "Clear Window on both front and back sides, perfect for taking pictures, videos and checking emails",
  },
  {
    merchantId: 1,
    productId: 10,
    bulletPoint:
      "Cozy Experience: Ladies' ​Silky Pajama Set is lightweight, soft, cozy, and elegant. That's silky friendly to the skin, ensure your comfortable sleep throughout the night. Suit For All Season.",
  },
  {
    merchantId: 2,
    productId: 11,
    bulletPoint: "Item Package Weight: 5.07 oz",
  },
  {
    merchantId: 2,
    productId: 12,
    bulletPoint: "Long Lasting,Moisturizing",
  },
  {
    merchantId: 2,
    productId: 13,
    bulletPoint:
      "Customizable Brewing Options - Drink your favorite coffee every morning using features like the brew strength selector and the option for small-batch (1-4 cup*) brewing that maintains all the flavor of a full brew",
  },
  {
    merchantId: 2,
    productId: 14,
    bulletPoint:
      "QUALITY: With our relentless passion to create the best possible umbrellas, we put every single umbrella through a 38 point quality control check before it reaches you. Built to perform. Built to last.",
  },
  {
    merchantId: 2,
    productId: 15,
    bulletPoint: "Exfoliating",
  },
  {
    merchantId: 2,
    productId: 16,
    bulletPoint:
      "Superior Stability: We adopt thicker (3mm) aluminum material and bigger size (4.1*3*4.4 inch) to guarantee the stability",
  },
  {
    merchantId: 2,
    productId: 17,
    bulletPoint:
      "HEALTHY SNACKING: Our baked keto crisps contains a satisfying high protein, keto friendly snacking alternative. Also, did we mention each cheese snack pack is Sugar-Free, Gluten-Free, and Lactose-Free",
  },
  {
    merchantId: 2,
    productId: 18,
    bulletPoint: "Face",
  },
  {
    merchantId: 2,
    productId: 19,
    bulletPoint:
      "Whether you want to get a better understanding for the fragrance, verify the absence of harmful chemicals, or check a plant ingredient for a potential allergy — there are lots of reasons that you’d want to check the ingredients in a product.",
  },
  {
    merchantId: 2,
    productId: 20,
    bulletPoint: "0.67 x 3.16 x 6.06 inches",
  },
  {
    merchantId: 3,
    productId: 21,
    bulletPoint: "Feeds up to 2 months",
  },
  {
    merchantId: 3,
    productId: 22,
    bulletPoint:
      "Classic Ankle Rain Boots: Fashion and comfy, keep your trendy in rain days.",
  },
  {
    merchantId: 3,
    productId: 23,
    bulletPoint:
      "If you pour boilng water into the bowl, then you do not need a microwave to heat ramen. Just wait for 3 minutes.",
  },
  {
    merchantId: 3,
    productId: 24,
    bulletPoint: "Dishwasher and microwave safe",
  },
  {
    merchantId: 3,
    productId: 25,
    bulletPoint: "Plush dog toy with flexible arms and legs",
  },
  {
    merchantId: 3,
    productId: 26,
    bulletPoint:
      "ACTIVE INGREDIENTS: Black charcoal is well known for its purifying and whitening functions.",
  },
  {
    merchantId: 3,
    productId: 27,
    bulletPoint: "Wattage: 35 Watts",
  },
  {
    merchantId: 3,
    productId: 28,
    bulletPoint:
      "Good quality fully waterproof really comfy quite strong flexible design",
  },
  {
    merchantId: 3,
    productId: 29,
    bulletPoint: "Multi Colored",
  },
  {
    merchantId: 3,
    productId: 30,
    bulletPoint:
      "It is suitable for all levels of rope skipping，can be used by beginners, crossfit jump rope, boxing jump rope, speed rope jumping enthusiasts and weight-loss people. You'll never trip over, and you'll be able to do all kinds of fancy jumps.",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Description.bulkCreate(descriptions, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Descriptions", null, {});
  },
};
