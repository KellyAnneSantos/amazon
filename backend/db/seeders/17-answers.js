"use strict";

const { Answer } = require("../models");

const answers = [
  {
    userId: 3,
    questionId: 1,
    body: "I contacted the seller and they told me the following: I am sorry about the steamer and thank you for reaching out to us, we are more than happy to help. This could be due to mineral build up.",
  },
  {
    userId: 4,
    questionId: 2,
    body: "It may look like a size of a soda can but it holds exactly 1/2c water! Just 4ounce to the MAX line. Heats really fast and a lot of steam",
  },
  {
    userId: 5,
    questionId: 3,
    body: "Hi, Thank you for your question. Yes, the Pudus slipper socks are unisex. We classified the sizing as women's 5-11 just to quantify the actual sizing of the slipper sock. This however, does not mean, they are only useable by women.",
  },
  {
    userId: 2,
    questionId: 4,
    body: "He'll definitely need Large. I wear women's 8.5 & the Regular is snug. My similar fleece socks by Mukluks pull on easier.",
  },
  {
    userId: 3,
    questionId: 5,
    body: "It's pure white and absolutely beautiful on.",
  },
  {
    userId: 4,
    questionId: 6,
    body: "I recommend wearing skinny jeans or jeans with a print for example leopard or snake print with nice compliment art heels.",
  },
  {
    userId: 5,
    questionId: 7,
    body: "My charge usually holds for about 20-30 minutes after charging for a few hours. Might have to charge for an initial 24 hours and see. If not, contact company for replacement. This hand vac is powerful and gets into all spaces.",
  },
  {
    userId: 2,
    questionId: 8,
    body: "As Someone else mentioned, while this vacuum looks and smells and is even labeled the same as the previous version, it is not, including the Voltage. We had the previous version which was indeed 16V Lithium, and we loved it. ",
  },
  {
    userId: 3,
    questionId: 9,
    body: "Hello: Special Offers are advertisements that show up on the Lock Screen of the device before you unlock it. ",
  },
  {
    userId: 4,
    questionId: 10,
    body: "I live in Florida and I use mine in the pool (in a waterproof cover of course until I get the new one.) I use it on the beach, on a boat and there is little shade here so yea it is antiglare and there is no need to angle it. as it is NOT Glossy at all.",
  },
  {
    userId: 5,
    questionId: 11,
    body: "I have never had luck peeling hard boil eggs til this. I put ice cubes and water in a bowl. I let the eggs sit in the steamer for an extra minute or two after timer. Transfer to ice bath. Let ice melt. Tap on end with hole (air pocket forms on that end).",
  },
  {
    userId: 2,
    questionId: 12,
    body: "Medium: 2.5 tbsp water",
  },
  {
    userId: 3,
    questionId: 13,
    body: "It says it has 220 pages.",
  },
  {
    userId: 4,
    questionId: 14,
    body: "It has pictures from Paris and London mostly",
  },
  {
    userId: 5,
    questionId: 15,
    body: "I don't know. Maybe a damp cloth on the heel and a dry brush on the boot?",
  },
  {
    userId: 2,
    questionId: 16,
    body: "Try contacting the seller if u received the wrong color.",
  },
  {
    userId: 3,
    questionId: 17,
    body: "The touch screen does not work submerged, so you have to make sure you make your settings so the camera doesn't shut off, turn it on above water, and then you have to manually take the picture by using the volume button.",
  },
  {
    userId: 4,
    questionId: 18,
    body: "Does NOT float with phone in it.",
  },
  {
    userId: 5,
    questionId: 19,
    body: "No idea.",
  },
  {
    userId: 2,
    questionId: 20,
    body: "yes, it will be available by the middle of April",
  },
  {
    userId: 4,
    questionId: 21,
    body: "No, this product does not make your hair oily. It is a very light mist that definitely makes your hair shine.",
  },
  {
    userId: 5,
    questionId: 22,
    body: "Rinse the sprayer head under the water from your faucet.",
  },
  {
    userId: 1,
    questionId: 23,
    body: "Yea kinda, but it’s more on the artificial chemical taste. I don’t think you’re suppose to eat it intentionally.",
  },
  {
    userId: 3,
    questionId: 24,
    body: "I don’t think it would work well for cheeks. The consistency is a little too thick for cheeks, in my opinion.",
  },
  {
    userId: 4,
    questionId: 25,
    body: "The water gets hot enough but we had trouble with the lid flow valve sticking closed. At times the coffee would not flow through into the pot and would run over on the counter & floor.",
  },
  {
    userId: 5,
    questionId: 26,
    body: "I agree. Why have a choice of 1-4 cups? If you put 2 cups of water it’ll brew 2 cups. It would be nice for me if I could fill the water up to 12 cups and brew 2 cups a day for several days.",
  },
  {
    userId: 1,
    questionId: 27,
    body: "This is a non-collapsing design. The umbrella is 33 1/8 inches long when closed. I love it, best umbrella I've ever owned.",
  },
  {
    userId: 3,
    questionId: 28,
    body: "The two plastic tabs just keep the locking mechanism in place. What may be hindering your umbrella from opening fully is above the slide mechanism, there is a small notch where a metal tab aligns with on the shaft itself.",
  },
  {
    userId: 4,
    questionId: 29,
    body: "It does a tiny bit, but it mostly just smells like skin care. It smells good. Not strong or overwhelming.",
  },
  {
    userId: 5,
    questionId: 30,
    body: "Hi! We recommend using this mask 2-3 times a week.",
  },
  {
    userId: 1,
    questionId: 31,
    body: "Ive had this for 3-4 years now and works like the first day. I. Recommend it and have given it as a present to relativas.",
  },
  {
    userId: 3,
    questionId: 32,
    body: "No, no buttons to press. It is a friction fit so you just adjust to the angle desired. I have had mine (2 of them) for about 2 months now and so far they have stayed snug and easily hold their angle (until you adjust to a different angle).",
  },
  {
    userId: 4,
    questionId: 33,
    body: "13 grams",
  },
  {
    userId: 5,
    questionId: 34,
    body: "It been a while, but yes it is high in sodium. Whisps help salads, and my husband likes them with beer.",
  },
  {
    userId: 1,
    questionId: 35,
    body: "This gently removes face and eye makeup, dirt, and impurities. Its gentle cream formula helps restore skin comfort and retains essential moisture, leaving skin feeling.",
  },
  {
    userId: 3,
    questionId: 36,
    body: "This product is good for normal to dry skin and can be used on oily skin.",
  },
  {
    userId: 4,
    questionId: 37,
    body: "Yes! Our bottles are made with post-consumer recycled plastic and are also curbside recyclable.",
  },
  {
    userId: 5,
    questionId: 38,
    body: "Our sprays have not been designed or tested as insect repellents.",
  },
  {
    userId: 1,
    questionId: 39,
    body: "No, they come in different sizes and are thick in the center with edges tapered to run smooth to your skin. This helps them stay put for days until the wound is healed. Great product.",
  },
  {
    userId: 3,
    questionId: 40,
    body: "I’ve used it when I’ve needed to wear the same shoes.",
  },
  {
    userId: 5,
    questionId: 41,
    body: "I usually keep the old one until I am sure the new one works. If it doesn't, I switch out the old sprayer top for the new bottle.",
  },
  {
    userId: 1,
    questionId: 42,
    body: "30-10-10.",
  },
  {
    userId: 2,
    questionId: 43,
    body: "I think so. I've worn them on very rainy days, and I don't ever remember slipping on very wet surfaces, whether outdoors or indoors.",
  },
  {
    userId: 4,
    questionId: 44,
    body: "I bathe big dogs and use these, my feet stay pretty dry throughout the day. They cant be used in pools of water but big puddles or rain, it stays dry. They do get little warm but my feet dont sweat, its a kind of cozy warm.",
  },
  {
    userId: 5,
    questionId: 45,
    body: "The bottom of the bowl is about 5.5 inch",
  },
  {
    userId: 1,
    questionId: 46,
    body: "One lid, one bowl. Single.",
  },
  {
    userId: 2,
    questionId: 47,
    body: "You can definitely use it at home. It is small. I bought my mini by accident. However it works fine.",
  },
  {
    userId: 4,
    questionId: 48,
    body: "Not much - probably a few ounces. It's a really lightweight and flexible.",
  },
  {
    userId: 5,
    questionId: 49,
    body: "Yes. This was our longest lasting toy...most squeaking toys don’t last more than a couple minutes, Gumby was the first chew toy he got and it lasted 5 months!.",
  },
  {
    userId: 1,
    questionId: 50,
    body: "Cute good for small dogs",
  },
  {
    userId: 2,
    questionId: 51,
    body: "75 ml",
  },
  {
    userId: 4,
    questionId: 52,
    body: "Hello, No, this toothpaste does not include fluoride.",
  },
  {
    userId: 5,
    questionId: 53,
    body: "Thank you for your inquiry. Yes, this will work in the dark as well as the light. However, if the outlet this is plugged into is connected to the light switch, then turning the switch off will turn the fan off.",
  },
  {
    userId: 1,
    questionId: 54,
    body: "This will not blend pancake batter, especially as submerging this unit will permanently damage it.",
  },
  {
    userId: 2,
    questionId: 55,
    body: "The Gardening Gloves size is for Women and Men.",
  },
  {
    userId: 4,
    questionId: 56,
    body: "Yes, my husband put then on when headed to the yard, stopped and scratched my back...awesome!",
  },
  {
    userId: 5,
    questionId: 57,
    body: "The package says washable, but they sit on a throne of lies. I would NOT consider these washable in any way.",
  },
  {
    userId: 1,
    questionId: 58,
    body: "These are not permanent markers. I don’t think they could be used on ceramics. The color would wash off.",
  },
  {
    userId: 2,
    questionId: 59,
    body: "No you cannot buy additional weights",
  },
  {
    userId: 4,
    questionId: 60,
    body: "They make no noise.",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Answer.bulkCreate(answers, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {});
  },
};
