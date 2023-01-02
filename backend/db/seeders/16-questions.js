"use strict";

const { Question } = require("../models");

const questions = [
  {
    userId: 2,
    productId: 1,
    body: "My steamer for some reason steams very short intervals and takes me forever to steam one item is that normal ?",
  },
  {
    userId: 3,
    productId: 1,
    body: "How many ounces of water does this hold and how many continuous minutes of steam can you get when it's filled with water?",
  },
  {
    userId: 4,
    productId: 2,
    body: "One part says it's unisex and another part says it's womens 5-11. Does it fit adult men?",
  },
  {
    userId: 5,
    productId: 2,
    body: "My husband wears a size 13 shoe. would I purchase a size adult regular or adult large? wondering if these will fit.",
  },
  {
    userId: 2,
    productId: 3,
    body: "Is this a pure white or winter/off white?",
  },
  {
    userId: 3,
    productId: 3,
    body: "How can I get the pants that is shown with the top?",
  },
  {
    userId: 4,
    productId: 4,
    body: "Just bought this and it's only holding a charge for about 2 minutes of use? Is this normal? Is there something wrong with the battery?",
  },
  {
    userId: 5,
    productId: 4,
    body: "How many volts is this?",
  },
  {
    userId: 2,
    productId: 5,
    body: "What are the special offers?",
  },
  {
    userId: 3,
    productId: 5,
    body: "Is it really glare free???",
  },
  {
    userId: 4,
    productId: 6,
    body: "Are the eggs easy to peel once cooked?",
  },
  {
    userId: 5,
    productId: 6,
    body: "I lost my little egg piercer. Can anyone tell me the measurements of the different levels for water?",
  },
  {
    userId: 2,
    productId: 7,
    body: "How many pages does it have?",
  },
  {
    userId: 3,
    productId: 7,
    body: "What places does it have pictures of?",
  },
  {
    userId: 4,
    productId: 8,
    body: "How would you suggest spot cleaning these boots? They do scuff on the heel when driving!",
  },
  {
    userId: 5,
    productId: 8,
    body: "Why does the light brown option change to brindle when you add it to your cart? i have already ordered these once and was sent the wrong color.",
  },
  {
    userId: 2,
    productId: 9,
    body: "can you take videos and pictures underwater?",
  },
  {
    userId: 3,
    productId: 9,
    body: "Does it float",
  },
  {
    userId: 4,
    productId: 10,
    body: "I’ve seen this item in white, where can I find that color to purchase?",
  },
  {
    userId: 5,
    productId: 10,
    body: "Will you restock this item?",
  },
  {
    userId: 3,
    productId: 11,
    body: "does this make your hair oily?",
  },
  {
    userId: 4,
    productId: 11,
    body: "How do you keep the sprayer from not getting clogged? Mine is clogged after just one use!",
  },
  {
    userId: 5,
    productId: 12,
    body: "Do the tints smell/taste fruity?",
  },
  {
    userId: 1,
    productId: 12,
    body: "Could you use this on your cheeks?",
  },
  {
    userId: 3,
    productId: 13,
    body: "How hot does the water get for brewing? thanks!",
  },
  {
    userId: 4,
    productId: 13,
    body: "When I select the 1-4 cup brew, it will brew all the water in the reservoir, even if full. Shouldn't you be able to select 1, 2, 3, or 4 cups?",
  },
  {
    userId: 5,
    productId: 14,
    body: "What is the length when collapsed?",
  },
  {
    userId: 1,
    productId: 14,
    body: "There are two plastic tabs that extend along the handle shaft, keeping the runner from going up enough to open the umbrell fully. What gives?",
  },
  {
    userId: 3,
    productId: 15,
    body: "Does it smell like a pumpkin? :3",
  },
  {
    userId: 4,
    productId: 15,
    body: "How often do you use this mask?",
  },
  {
    userId: 5,
    productId: 16,
    body: "My question is like how long will the swivel part of the stand will last before it starts to loosen up and not work anymore. Can anybody answer this?",
  },
  {
    userId: 1,
    productId: 16,
    body: "Can anyone tell how does the adjustment work? Is thete any button to press?",
  },
  {
    userId: 3,
    productId: 17,
    body: "How much protein?",
  },
  {
    userId: 4,
    productId: 17,
    body: "what is the sodium content?",
  },
  {
    userId: 5,
    productId: 18,
    body: "Can this be used for dry to very dry mature skin?",
  },
  {
    userId: 1,
    productId: 18,
    body: "Can this be used for oily skin?",
  },
  {
    userId: 3,
    productId: 19,
    body: "What is the bottle made of? Is it recyclable?",
  },
  {
    userId: 4,
    productId: 19,
    body: "Does it repel mosquitos",
  },
  {
    userId: 5,
    productId: 20,
    body: "Could you cut these to a different size/shape?",
  },
  {
    userId: 1,
    productId: 20,
    body: "Will this help on feet to cover skin for protection?",
  },
  {
    userId: 4,
    productId: 21,
    body: "I just bought the last bottle at the garden center and can't get it to spray! We've moved every part we can think of. What's blocking the spray?",
  },
  {
    userId: 5,
    productId: 21,
    body: "What are the proportions of NPK in this orchid fertilizer?",
  },
  {
    userId: 1,
    productId: 22,
    body: "Are they non-slip on water and oil spilled surfaces? Aka are they good for working in the kitchen and/or as a server?",
  },
  {
    userId: 2,
    productId: 22,
    body: "How waterproof can these shoes be with laces? Im thinking rain. Also, do they get hot? Thanks!",
  },
  {
    userId: 4,
    productId: 23,
    body: "What is the diameter of the bottom of the bowl?",
  },
  {
    userId: 5,
    productId: 23,
    body: "Is this a single bowl or a set?",
  },
  {
    userId: 1,
    productId: 24,
    body: "I bought the mini mat thinking its the original one. Can I use this at home or should i order the bigger one?",
  },
  {
    userId: 2,
    productId: 24,
    body: "How much it weight?",
  },
  {
    userId: 4,
    productId: 25,
    body: "Does this toy squeak?",
  },
  {
    userId: 5,
    productId: 25,
    body: "Is this product any good?",
  },
  {
    userId: 1,
    productId: 26,
    body: "How much toothpaste is in this tube?",
  },
  {
    userId: 2,
    productId: 26,
    body: "Does it contains fluoride?",
  },
  {
    userId: 4,
    productId: 27,
    body: "Will this fan work in the dark?",
  },
  {
    userId: 5,
    productId: 27,
    body: "can it blend pancake batter?",
  },
  {
    userId: 1,
    productId: 28,
    body: "what size are these gloves? Mens or womens?",
  },
  {
    userId: 2,
    productId: 28,
    body: "could you use them to scratch your back or someone else's back?",
  },
  {
    userId: 4,
    productId: 29,
    body: "Are these washable?",
  },
  {
    userId: 5,
    productId: 29,
    body: "Would these work on ceramics?",
  },
  {
    userId: 1,
    productId: 30,
    body: "Can you buy heavier weights for them?",
  },
  {
    userId: 2,
    productId: 30,
    body: "Do these make any noise when you are using them? If so how much?",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate(questions, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
