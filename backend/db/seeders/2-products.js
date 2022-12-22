"use strict";

const { Product } = require("../models");

const products = [
  {
    merchantId: 1,
    name: "Garment Steamer",
    department: "Home & Kitchen",
    price: 21.97,
    size: false,
    color: false,
    description:
      "Gentle On Fabric - It is safe to use, and gentle on even the most delicate fabrics. Use it on satin, nylon blends, cotton, wool, linen, sequins, beads, embroidery, and more!",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://cdn.thewirecutter.com/wp-content/media/2022/10/clothing-steamers-2019-2048px-0163.jpeg",
  },
  {
    merchantId: 1,
    name: "Slippers",
    department: "Clothing, Shoes & Jewelry",
    price: 23.23,
    size: true,
    color: true,
    description:
      "High-Quality Indoor Comfy Socks: We carefully select materials and fabrics with the ultimate softness and snug. Our grippy socks have an inner layer of 100% polyester, 100% acrylic outer layer, a soft sole, and anti-slip silicone grippers.",
    freeReturn: false,
    essential: false,
    prime: false,
    previewImage:
      "https://m.media-amazon.com/images/I/61YZxieFrnL._AC_UY1000_.jpg",
  },
  {
    merchantId: 1,
    name: "Blouse",
    department: "Clothing, Shoes & Jewelry",
    price: 33.99,
    size: true,
    color: true,
    description: "95% Polyester, 5% Spandex",
    freeReturn: true,
    essential: false,
    prime: false,
    previewImage:
      "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/qn2qiu86w1zzzxahlfzz.jpg",
  },
  {
    merchantId: 1,
    name: "Vacuum",
    department: "Home & Kitchen",
    price: 56.99,
    size: false,
    color: false,
    description: "dusbuster Handheld Vacuum, Cordless, Magic Blue",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://images.thdstatic.com/productImages/7231ad48-5e2e-4b58-affa-1f80c8261710/svn/hoover-upright-vacuums-uh71320-64_1000.jpg",
  },
  {
    merchantId: 1,
    name: "Kindle",
    department: "Amazon Devices",
    price: 129.99,
    size: true,
    color: true,
    description:
      "Enjoy twice the storage with 8 GB. Or choose 32 GB to hold more magazines, comics, and audiobooks.",
    freeReturn: true,
    essential: false,
    prime: false,
    previewImage:
      "https://cdn.vox-cdn.com/thumbor/EDin--weesrJrcp1em16A2Dg-cU=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22954534/cgartenberg_211020_4819_0002.jpg",
  },
  {
    merchantId: 1,
    name: "Egg Cooker",
    department: "Home & Kitchen",
    price: 16.99,
    size: true,
    color: true,
    description:
      "SIX EGG CAPACITY: Cook up to 6 eggs in soft, medium, or hard boiled firmness, while saving time and water. Eggs come out consistently perfect with shell easy to peel, and clean up is snap.",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://www.sencor.com/getmedia/3e0eca90-572b-46a0-9d56-5c74d7d0e8b3/40029281.jpg.aspx?width=2100&height=2100&ext=.jpg",
  },
  {
    merchantId: 1,
    name: "Journal",
    department: "Books",
    price: 30.49,
    size: false,
    color: false,
    description:
      "Full of inspiration, beautiful photography and travel motivation that ignites the wanderlust spirit, it is the perfect gift for every traveler, adventurer & life seeker.",
    freeReturn: false,
    essential: false,
    prime: false,
    previewImage:
      "https://iajw.org/wp-content/uploads/2019/09/What-is-journal-writing-image-of-blank-journal.jpg",
  },
  {
    merchantId: 1,
    name: "Ankle Boots",
    department: "Clothing, Shoes & Jewelry",
    price: 54.75,
    size: true,
    color: true,
    description: "100% Leather",
    freeReturn: true,
    essential: false,
    prime: false,
    previewImage:
      "https://cdn-img.prettylittlething.com/b/1/8/f/b18f0b6621dbcba8c6bdc44fac8873816e4d0c8a_shp9347_2.jpg",
  },
  {
    merchantId: 1,
    name: "Waterproof Phone Pouch",
    department: "Cell Phones & Accessories",
    price: 8.99,
    size: false,
    color: true,
    description:
      "Universal waterproof case dry bag fits all smartphones up to 7 inch diagonal size, Certain big screen phones need to remove protective case. Credit card wallet money waterproof dry bag for beach, pools, fishing, swimming, boating, kayaking, and snorkeling",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://i5.walmartimages.com/asr/a28d73e3-eb62-44a3-b525-ccc45e1fbc5f.fbfebad47a5a4460757e41c761129e5b.jpeg",
  },
  {
    merchantId: 1,
    name: "Pajama Set",
    department: "Clothing, Shoes & Jewelry",
    price: 32.99,
    size: true,
    color: true,
    description:
      "Material: Silk Pajamas for Women made of high-quality imitation silk fabric( Polyester )",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://m.media-amazon.com/images/I/710k2YNDywL._AC_UY1000_.jpg",
  },
  {
    merchantId: 2,
    name: "Hair Spray",
    department: "Beauty & Personal Care",
    price: 16.15,
    size: true,
    color: false,
    description: "4 x 5 x 4 inches; 5.07 Ounces",
    freeReturn: false,
    essential: false,
    prime: true,
    previewImage:
      "https://cdn.shopify.com/s/files/1/0151/5253/files/HairSpray.jpg",
  },
  {
    merchantId: 2,
    name: "Lip Tint",
    department: "Beauty & Personal Care",
    price: 7.0,
    size: false,
    color: true,
    description: "OR205 Apricot Red(21AD)",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://cafe24img.poxo.com/beautyboxkorea/web/upload/NNEditor/20201020/4OIN%20Foreul%20Velmower%20Lip%20Tint%204.5g_6_shop2_141922.jpg",
  },
  {
    merchantId: 2,
    name: "Coffeemaker",
    department: "Home & Kitchen",
    price: 76.49,
    size: false,
    color: false,
    description:
      "12-Cup* Thermal Carafe - The large capacity carafe is double-walled and vacuum-sealed to keep your coffee at optimal drinking temperature for hours",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--Y8R5TIPy--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1664561506000/Hero-20220916_KeurigKCafeHeroV4_Renzi.PNG",
  },
  {
    merchantId: 2,
    name: "Umbrella",
    department: "Clothing, Shoes & Jewelry",
    price: 89.99,
    size: false,
    color: true,
    description:
      "TESTED TO EXTREMES: As part of our design process, all our models are independently wind tunnel tested to speeds will in excess of every day use.",
    freeReturn: false,
    essential: false,
    prime: false,
    previewImage:
      "https://cdn-prod.scalefast.com/public/assets/img/resized/squareenix-store-v3/b76b842beb47731241f78e30a11692b3_1920_KR.jpg",
  },
  {
    merchantId: 2,
    name: "Exfoliating Face Mask",
    department: "Beauty & Personal Care",
    price: 12.59,
    size: false,
    color: false,
    description:
      "PREBIOTICS help maintain the strength of the skin’s protective barrier for a healthy-looking glow.",
    freeReturn: true,
    essential: false,
    prime: false,
    previewImage: "https://i1.perfumesclub.com/grande/178945.jpg",
  },
  {
    merchantId: 2,
    name: "Cell Phone Stand",
    department: "Cell Phones & Accessories",
    price: 12.99,
    size: false,
    color: true,
    description:
      "Adjustable Angle Viewing: Multiple Angles could be adjusted (270 degree rotating) to meet your different viewing demand. Makes you hands-free to enjoy your games, videos and Facetime",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://i.etsystatic.com/26620830/r/il/74942b/2944635458/il_570xN.2944635458_n43d.jpg",
  },
  {
    merchantId: 2,
    name: "Cheese Crisps",
    department: "Grocery & Gourmet Food",
    price: 11.97,
    size: true,
    color: false,
    description:
      "100% ARTISANAL CHEESE: Individually oven-baked, hand crafted cheese crunch batches, perfectly aged containing premium ingredients and baked for that savory crunch you love. Perfect low carb snacks for any diet",
    freeReturn: false,
    essential: false,
    prime: false,
    previewImage:
      "https://anitalianinmykitchen.com/wp-content/uploads/2021/08/cheese-crisps-blog.jpg",
  },
  {
    merchantId: 2,
    name: "Face Cleanser",
    department: "Beauty & Personal Care",
    price: 15.99,
    size: true,
    color: false,
    description: "Unscented",
    freeReturn: false,
    essential: true,
    prime: false,
    previewImage:
      "https://www.becomebetty.com/wp-content/uploads/2020/01/Trader-Joes-All-In-One-Facial-Cleanser.jpg",
  },
  {
    merchantId: 2,
    name: "Air Freshener",
    department: "Health, Household & Baby Care",
    price: 13.99,
    size: false,
    color: false,
    description: "Black Currant Rose",
    freeReturn: true,
    essential: false,
    prime: false,
    previewImage:
      "https://airboss-aircare.com/wp-content/uploads/product/394/closet-air-freshener-lavender.jpg",
  },
  {
    merchantId: 2,
    name: "Bandages",
    department: "Health, Household & Baby Care",
    price: 2.22,
    size: false,
    color: false,
    description: "5 Count (Pack of 1)",
    freeReturn: false,
    essential: false,
    prime: false,
    previewImage: "https://m.media-amazon.com/images/I/41eOyYfZ3kL._AC_.jpg",
  },
  {
    merchantId: 3,
    name: "Orchid Plant Food Spikes",
    department: "Garden & Outdoor",
    price: 3.99,
    size: true,
    color: false,
    description: "Helps promote green leaves and beautiful blooms",
    freeReturn: false,
    essential: false,
    prime: false,
    previewImage: "https://i.ebayimg.com/images/g/1L0AAOSwo~ViDxsN/s-l400.jpg",
  },
  {
    merchantId: 3,
    name: "Rubber Shoes",
    department: "Clothing, Shoes & Jewelry",
    price: 31.99,
    size: true,
    color: true,
    description:
      "Quality:Lace-up women's boots are made of natural rubber.all suit for ladies.",
    freeReturn: true,
    essential: false,
    prime: false,
    previewImage:
      "https://images.stylight.net/image/upload/t_web_product_330x440max_nobg/q_auto:eco,f_auto/jphh7iejbogcvdenpjjs.jpg",
  },
  {
    merchantId: 3,
    name: "Bowl",
    department: "Home & Kitchen",
    price: 19.99,
    size: false,
    color: true,
    description:
      "First, put the instant noodles into the bowl, then pour the dressing and dried vegetables into it. Next step is adding water. Finally cover the lid and put the bowl into a microwave. Heat on high for a few minutes, then you get ramen.",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://elavegan.com/wp-content/uploads/2021/05/vegan-buddha-bowl-with-chickpeas-avocado-colorful-veggies-and-green-dressing-on-the-side.jpg",
  },
  {
    merchantId: 3,
    name: "Placemat",
    department: "Baby",
    price: 22.49,
    size: false,
    color: true,
    description: "Perfect for mealtime with infants and toddlers (6+ months)",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://images.food52.com/JZxJTjOyjdMCj116-6AOhPmoWFk=/1500x0/c5bffd76-2f12-421b-9458-ad526a503cd2--2019-0403_blue-pheasant_natural-seagrass-placemat-set-of-4_family_silo_ty-mecham_001.jpg",
  },
  {
    merchantId: 3,
    name: "Dog Toy",
    department: "Toys & Games",
    price: 3.62,
    size: false,
    color: false,
    description: "Officially Licensed and perfect nostalgic pals for your pet",
    freeReturn: true,
    essential: false,
    prime: true,
    previewImage:
      "https://www.hartz.com/wp-content/uploads/2016/12/3270004353_Tiny_Dog_Jungle_Plush_giraffe_1300x1300.jpg",
  },
  {
    merchantId: 3,
    name: "Charcoal Toothpaste",
    department: "Beauty & Personal Care",
    price: 4.99,
    size: true,
    color: false,
    description:
      "NATURAL INGREDIENTS. This toothpaste contains even *98% ingredients of natural origin.",
    freeReturn: false,
    essential: true,
    prime: false,
    previewImage:
      "https://cdn2.momjunction.com/wp-content/uploads/2021/12/11-Best-Charcoal-Toothpastes-For-Teeth-Whitening-In-2021.jpg",
  },
  {
    merchantId: 3,
    name: "Fan",
    department: "Home & Kitchen",
    price: 14.99,
    size: false,
    color: true,
    description: "Power Source Type: Electricity",
    freeReturn: false,
    essential: false,
    prime: false,
    previewImage:
      "https://media.self.com/photos/5f0c9c5e1a6a441deac49659/1:2/w_1898,h_3796,c_limit/hand_held_fan.jpeg",
  },
  {
    merchantId: 3,
    name: "Garden Gloves",
    department: "Garden & Outdoor",
    price: 9.2,
    size: false,
    color: false,
    description: "These gloves are suitable for most men, women and teens",
    freeReturn: true,
    essential: false,
    prime: false,
    previewImage:
      "https://hosstools.com/wp-content/uploads/2020/10/hoss-garden-gloves-green-19.jpg",
  },
  {
    merchantId: 3,
    name: "Markers",
    department: "Toys & Games",
    price: 17.99,
    size: false,
    color: false,
    description:
      "PROMOTES EARLY CHILDHOOD DEVELOPMENT: Designed for layered learning, which gives children the opportunity to do original planning and thinking while creating expressive art, developing hand eye coordination and color recognition. DRIES QUICKLY",
    freeReturn: true,
    essential: false,
    prime: false,
    previewImage:
      "https://www.arrtx.com/wp-content/uploads/2022/08/Markers.jpg",
  },
  {
    merchantId: 3,
    name: "Jump Rope",
    department: "Sports & Outdoors",
    price: 12.78,
    size: false,
    color: false,
    description:
      "Perfect for ANY PEOPLE - for all ages, whether it's old people, kids or young people, it can be used perfectly. It's never too short or too long for anyone, height limitless.",
    freeReturn: false,
    essential: false,
    prime: false,
    previewImage:
      "https://post.healthline.com/wp-content/uploads/2021/04/jump-rope-732x549-thumbnail.jpg",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Product.bulkCreate(products, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
