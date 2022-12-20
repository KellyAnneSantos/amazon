"use strict";

const { Media } = require("../models");

const medias = [
  {
    imageableId: 1,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.cvs.com/bizcontent/merchandising/productimages/high_res/728028308891.jpg",
  },
  {
    imageableId: 1,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6369/6369469_rd.jpg",
  },
  {
    imageableId: 2,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1668723376-untitled-design-43-1668723349.jpg",
  },
  {
    imageableId: 2,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202227/0265/faux-fur-slippers-1-o.jpg",
  },
  {
    imageableId: 3,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://i5.walmartimages.com/asr/511bf917-1e1f-4cc9-8a52-dc94c85cb85d.99a84230a9ac0c7dc5e8fbbce648e13e.jpeg",
  },
  {
    imageableId: 4,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--HunhxhOY--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_xy_center,h_972,q_auto,w_972,x_2762,y_1253/https://reviewed-production.s3.amazonaws.com/1643985439161/BestOverall1.png",
  },
  {
    imageableId: 3,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.heyjunehandmade.com/wp-content/uploads/2018/05/PhoenixBlouse19.jpg",
  },
  {
    imageableId: 5,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://i0.codibook.net/files/1978071613838/eeac8a76815298a8/1204506282.jpg",
  },
  {
    imageableId: 6,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://cdn.historicalemporium.com/store/media/007948/007948_01.jpg",
  },
  {
    imageableId: 4,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6514/6514610cv16d.jpg",
  },
  {
    imageableId: 7,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://i5.walmartimages.com/asr/a5213266-a39f-47c0-9e9a-0bc4cbb70567.c6d0adfb46ef334ebc9df4ef306f64dc.jpeg",
  },
  {
    imageableId: 8,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.lg.com/us/images/vacuum-cleaners/md08001161/gallery/medium13.jpg",
  },
  {
    imageableId: 5,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.tradeinn.com/f/13815/138151546_4/amazon-kindle-ereader.jpg",
  },
  {
    imageableId: 9,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://i.ytimg.com/vi/VVELNKGwnV8/maxresdefault.jpg",
  },
  {
    imageableId: 10,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://media.wired.com/photos/62ed540e7e7512dc132d181a/master/w_800,c_limit/Nook-Glowlight-4e.jpg",
  },
  {
    imageableId: 6,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.gopresto.com/i/1568033882236/n/uploads/04633_Product_Page_Main.jpg",
  },
  {
    imageableId: 11,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://images.thdstatic.com/productImages/da24c038-af57-46e8-ba24-5c447043e57a/svn/white-as-seen-on-tv-egg-cookers-7001-4f_600.jpg",
  },
  {
    imageableId: 12,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://hamiltonbeach.com/media/products/25508-VPA-03.jpg",
  },
  {
    imageableId: 7,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://vanillapapers.net/wp-content/uploads/2019/11/journal-10.jpg",
  },
  {
    imageableId: 13,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.tomboweurope.com/fileadmin/Content/article/traveljournal/20_04_TravelJournal_Tokyo_3.jpg",
  },
  {
    imageableId: 14,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://sheridanvoysey.com/wp-content/uploads/2016/05/4-1.jpg",
  },
  {
    imageableId: 8,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.bodenimages.com/productimages/productlarge/22wwin_a1279_blk.jpg",
  },
  {
    imageableId: 15,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "http://jf-na-cdn.justfab.com/image/product/BS2149421-0001/BS2149421-0001-1_589x860.jpg",
  },
  {
    imageableId: 16,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://cdn-img.prettylittlething.com/0/3/a/9/03a988d9f4bfae34ae64cbdd01d894ac06a3270b_cmf8496_1.jpg",
  },
  {
    imageableId: 9,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://hiearcool.net/uploads/20211130/d0112ca98cbe6b56cd2c1e1c21898d4e.jpg",
  },
  {
    imageableId: 17,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://i.ebayimg.com/images/g/XO8AAOSwSBVhLKWd/s-l500.jpg",
  },
  {
    imageableId: 18,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.tripsavvy.com/thmb/FdH2Og5GrmTNlBkJZ2wUNfhXRD8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Web_1500-WaterproofCase_Group_02-ec0e25a24e054b6facf80cb206f53fb3.jpg",
  },
  {
    imageableId: 10,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://cdn.the-sleeper.com/wp-content/uploads/2020/01/Sleeper_PF2003P_Sizeless-Pajama-Set-with-Pants-in-Blue_285-3-1-1152x1732.jpg",
  },
  {
    imageableId: 19,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://media1.popsugar-assets.com/files/thumbor/Vsfck-yUcXgqtKsEdHmlDVVty2c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/05/054/n/1922564/b3fedf9d78c28abf_netimgEmZEO5/i/For-Never-Getting-Old-Pick-Floerns-Collared-Two-Piece-Pajama-Set.jpg",
  },
  {
    imageableId: 20,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://assets.ptimgs.com/ptimgs/rk/images/dp/wcm/202243/0204/harry-potter-gryffindor-house-pajama-set-o.jpg",
  },
  {
    imageableId: 11,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://i5.walmartimages.com/asr/a391347f-d7eb-4967-94e7-fc006392ab1b.87c9353ecbe2378dd12eca98d661afde.png",
  },
  {
    imageableId: 21,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.byrdie.com/thmb/pwiSPX21IHP6gJiBmH-CiiOrKmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BYRDIE-primary-alcohol-free-hair-spray-6dc94d65695e428893ba1aaecac6ff46.jpg",
  },
  {
    imageableId: 22,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.sephora.com/productimages/sku/s2439222-main-zoom.jpg",
  },
  {
    imageableId: 12,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/99/140/XXL_p0158914099.jpg",
  },
  {
    imageableId: 23,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/42/230/XXL_p0158923042.jpg",
  },
  {
    imageableId: 24,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://m.media-amazon.com/images/I/51-w9JhZ3CL.jpg",
  },
  {
    imageableId: 13,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://cdn.shortpixel.ai/spai/w_1003+q_lossless+ret_img+to_webp/https://www.coffeeness.de/wp-content/uploads/2022/03/CuisinartCoffeeCenterCoverWithMugs.jpg",
  },
  {
    imageableId: 25,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://embed.widencdn.net/img/worldkitchen/zwe7gnlke9/650x650px/IB_140-6012-01_Solo-Coffee-Maker_ATF_Square_Tile7.jpeg",
  },
  {
    imageableId: 26,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://people.com/thmb/MQDYTT-V0-5M4icJNvLLN7WgnHE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/peo-social-best-keurig-coffee-makers-of-2022-tout-51981b45901d410089e83d829a11cd38.jpg",
  },
  {
    imageableId: 14,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2022/03/umbrellas-2048px-8655.jpg",
  },
  {
    imageableId: 27,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://m.media-amazon.com/images/I/71+HyNwO1FL._AC_UY1000_.jpg",
  },
  {
    imageableId: 28,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://banale.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/o/p/open_umbrella_sfondo.jpg",
  },
  {
    imageableId: 15,
    imageableType: "product",
    mediaType: "image",
    mediaUrl: "https://i.ebayimg.com/images/g/BAUAAOSwrFlctbeZ/s-l1600.jpg",
  },
  {
    imageableId: 29,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://static.thcdn.com/images/large/original//productimg/1600/1600/12126090-2004875660287181.jpg",
  },
  {
    imageableId: 30,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "http://www.thebeautyblotter.com/wp-content/uploads/2019/05/THE-BEST-FACE-MASKS-683x1024.png",
  },
  {
    imageableId: 16,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.qualitylogoproducts.com/blog/wp-content/uploads/2019/10/What-is-a-Cell-Phone-Stand.jpg",
  },
  {
    imageableId: 31,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://i.etsystatic.com/21452138/r/il/aa9970/2461254035/il_fullxfull.2461254035_p6tx.jpg",
  },
  {
    imageableId: 32,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://casekoo.com/wp-content/uploads/2020/11/IMG_1028-e1614306317880.jpg",
  },
  {
    imageableId: 17,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.saltandlavender.com/wp-content/uploads/2018/07/parmesan-crisps-recipe-2-720x1080.jpg",
  },
  {
    imageableId: 33,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://how2doketo.com/wp-content/uploads/2019/03/Keto-Cheese-Chips-2.jpg",
  },
  {
    imageableId: 34,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://slimfast.com/wp-content/uploads/2018/08/shutterstock_719200108-1200x675-cropped.jpg",
  },
  {
    imageableId: 18,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://media.allure.com/photos/61aa5400d35ac31c26d26bf9/1:1/w_2000,h_2000,c_limit/Best%20Facial%20Cleansers.jpg",
  },
  {
    imageableId: 35,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.laroche-posay.us/on/demandware.static/-/Sites-acd-laroche-posay-master-catalog/default/dw82c8981e/img/3337875751032/1_LipikarWashAP+_400mlPump.jpg",
  },
  {
    imageableId: 36,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557337535-elle-beauty-faces-washes-0003-estellemicellar-1526928470.jpg",
  },
  {
    imageableId: 19,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.airwick.us/products/room-spray/_jcr_content/root/container_1522806242/container/image.coreimg.90.1500.jpeg/1659458634415/8037-1000x1000-aw-pdp-beauty-shots-aerosols-us-lavender-chamomile-r0-%281%29-min.jpeg",
  },
  {
    imageableId: 37,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://m.media-amazon.com/images/I/71Cm+1GPssL.jpg",
  },
  {
    imageableId: 38,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://i.ebayimg.com/images/g/Ot0AAOSwPIFgsQpS/s-l500.jpg",
  },
  {
    imageableId: 20,
    imageableType: "product",
    mediaType: "image",
    mediaUrl: "https://m.media-amazon.com/images/I/81-1F0gJgfL.jpg",
  },
  {
    imageableId: 39,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://m.media-amazon.com/images/I/815YR54pZKL.jpg",
  },
  {
    imageableId: 40,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://i5.walmartimages.com/asr/e3d94a1c-25da-47ac-8e5d-def4db32426d.4113ef479cb60bd8e0bfe331986c0ce9.jpeg",
  },
  {
    imageableId: 21,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://di2ponv0v5otw.cloudfront.net/posts/2020/10/20/5f8f90f23bad6d68d61c9811/m_5f8f9101ff8304c63e228676.jpg",
  },
  {
    imageableId: 41,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://i.ebayimg.com/images/g/1L0AAOSwo~ViDxsN/s-l500.jpg",
  },
  {
    imageableId: 42,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://images.thdstatic.com/productImages/6c807c4e-c2d1-434a-9ec7-92b1f037e83f/svn/miracle-gro-plant-food-fertilizer-vb300522-40_600.jpg",
  },
  {
    imageableId: 22,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.highsnobiety.com/static-assets/thumbor/j1Ppo9CLtY_a3rcKjJKL0ItoIsY=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/08/27125912/matthew-williams-givenchy-rubber-shoe-09.jpg",
  },
  {
    imageableId: 43,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://media.hunterboots.com/public/serve/57922/w_300,q_80/20220826101154-PROD-AW22-ORG-MFF9111NRE-DOV-1.jpg",
  },
  {
    imageableId: 44,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://coolmaterial.com/wp-content/uploads/2021/04/Vans-Trek-Rubber-Slip-Ons-1.jpg",
  },
  {
    imageableId: 23,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://cb.scene7.com/is/image/Crate/EssentialBowlS8SSS20/$web_pdp_main_carousel_low$/200305104314/essential-bowls-set-of-eight.jpg",
  },
  {
    imageableId: 45,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_3.0,f_auto,w_500/5293119_png/minera-decorative-bowl--medium-swarovski-5293119.png",
  },
  {
    imageableId: 46,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://us.baccarat.com/on/demandware.static/-/Sites-baccarat-master-products/default/dw97872d34/original/Swing/2813980.jpg",
  },
  {
    imageableId: 24,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://i.etsystatic.com/10208431/r/il/9651a8/4195102456/il_570xN.4195102456_mwcn.jpg",
  },
  {
    imageableId: 47,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://m.media-amazon.com/images/I/515BNwIcTlL._AC_SY350_.jpg",
  },
  {
    imageableId: 48,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://cdn.shoplightspeed.com/shops/644790/files/32329531/800x1024x2/placemat-quilted-round-red.jpg",
  },
  {
    imageableId: 25,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_37/3571449/31ffmvmfa3l-sl500-6324d5b3e012c.jpg",
  },
  {
    imageableId: 49,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.hookseurope.com/pub_images/original/051227-20-00000_1.jpg",
  },
  {
    imageableId: 50,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.hartz.com/wp-content/uploads/2016/12/3270004353_Tiny_Dog_Jungle_Plush_giraffe_1300x1300.jpg",
  },
  {
    imageableId: 26,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://i5.walmartimages.com/asr/5ae8808d-c073-4379-ae98-70f9bc84c1a9.67c48bc6e6981a219b477219bfede00e.jpeg",
  },
  {
    imageableId: 51,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://mymagicmud.com/wp-content/uploads/2019/11/above-fold-icon-4.jpg",
  },
  {
    imageableId: 52,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://i5.walmartimages.com/asr/d2cd9367-a308-451d-ad74-0b5d11fd901f.961471392753a2e18cd5780ee7b6b59e.jpeg",
  },
  {
    imageableId: 27,
    imageableType: "product",
    mediaType: "image",
    mediaUrl: "https://superdutyfans.com/wp-content/uploads/2020/11/sd4x.jpg",
  },
  {
    imageableId: 53,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://pyxis.nymag.com/v1/imgs/25e/125/f2270be94e9ea93393b6a0b0d551c0022d-FanFan.2x.rdeep-vertical.w245.png",
  },
  {
    imageableId: 54,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://assets.leevalley.com/Size4/10091/AM202-air-king-wall-mount-fan-f-5139.jpg",
  },
  {
    imageableId: 28,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "http://mobileimages.lowes.com/productimages/3209d5b6-3f7e-4367-a4ea-b0f38630a8f0/05429310.jpg",
  },
  {
    imageableId: 55,
    imageableType: "review",
    mediaType: "image",
    mediaUrl: "https://m.media-amazon.com/images/I/91ITD-s12wL.jpg",
  },
  {
    imageableId: 56,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-gardening-gloves-1585051477.jpg",
  },
  {
    imageableId: 29,
    imageableType: "product",
    mediaType: "image",
    mediaUrl:
      "https://www.jerrysartarama.com/media/catalog/product/cache/ecb49a32eeb5603594b082bd5fe65733/c/o/concept-marker-set-of-36-open.jpg",
  },
  {
    imageableId: 57,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://sc04.alicdn.com/kf/Hd007c239a72e44db8714a25138b33f9fo.jpg",
  },
  {
    imageableId: 58,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://cdn.bic.com/media/catalog/product/cache/f794010ace31b648ca7ce8cbac4f31be/g/e/gepm1edc_fan_1_2.jpg",
  },
  {
    imageableId: 30,
    imageableType: "product",
    mediaType: "image",
    mediaUrl: "https://m.media-amazon.com/images/I/510SzmVBfRL._AC_SY1000_.jpg",
  },
  {
    imageableId: 59,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://media.self.com/photos/57d894b946d0cb351c8c50a6/master/pass/This-7-Minute-Jump-Rope-Workout_Feature.png",
  },
  {
    imageableId: 60,
    imageableType: "review",
    mediaType: "image",
    mediaUrl:
      "https://www.nerdfitness.com/wp-content/uploads/2020/05/weighted-jump-rope.png",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Media.bulkCreate(medias, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Medias", null, {});
  },
};
