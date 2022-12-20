"use strict";

const { Review } = require("../models");

const reviews = [
  {
    userId: 4,
    productId: 1,
    stars: 5,
    headline: "A LOT OF WORDS TO DESCRIBE THE BEST STEAMER EVER",
    previewImage:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6369/6369469_rd.jpg",
    body: "I could write about this steamer for hours I love it so much. This steamer deserves 10 stars , not just for the steamer itself but also for the fact that the seller sends a follow up email telling you tips for the steamer, which is so awesome.",
  },
  {
    userId: 5,
    productId: 1,
    stars: 4,
    headline: "For one item only! Small water tank.",
    previewImage:
      "https://media.cntraveler.com/photos/5de6b5aa083c7000096590f6/master/pass/_Travel-Steamers-LEDE.jpg",
    body: "Its a nice travel steamer, but only holds enough water to do one linen/cotton shirt or a pair of pants. It lasts for about 5-6 minutes from full. I've only used distilled water in it.",
  },
  {
    userId: 2,
    productId: 2,
    stars: 5,
    headline: "Amazing",
    previewImage:
      "http://www.luxurycollectionstore.com/images/products/lrg/luxury-collection-frette-slippers-LUX-457-01-01-WH-NL-AD_lrg.jpg",
    body: "These are amazing and thick, like walking on a cloud! I wear an 8.5 women’s shoe and these fit nice and snug",
  },
  {
    userId: 3,
    productId: 2,
    stars: 2,
    headline: "Disappointed",
    previewImage: "https://m.media-amazon.com/images/I/51bsmfbG9rS.jpg",
    body: "Runs extremely small",
  },
  {
    userId: 4,
    productId: 3,
    stars: 5,
    headline: "Great shirt",
    previewImage:
      "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22fw/img/item_21_01.jpg",
    body: "Great shirt",
  },
  {
    userId: 5,
    productId: 3,
    stars: 5,
    headline: "Wedding fit",
    previewImage:
      "https://cdn.cliqueinc.com/posts/291982/best-white-blouses-291982-1614909953601-square.700x0c.jpg",
    body: "I love this top. The sleeves are quite a bit long if you have short arms like me and want to wear it off the shoulder. But it’s incredibly comfy, the material is thick and soft.",
  },
  {
    userId: 2,
    productId: 4,
    stars: 4,
    headline: "Great, powerful little hand vacuum with one design flaw",
    previewImage: "https://m.media-amazon.com/images/I/41V4JBOioZL._AC_.jpg",
    body: "My biggest issue is with the nozzle portion.. on every single one I've owned the top has a tendency to just fall off.... Sometimes in the middle of vacuuming.",
  },
  {
    userId: 3,
    productId: 4,
    stars: 5,
    headline:
      "Awesome vacuum, picks everything up! Excellent sidekick when you have pets!",
    previewImage:
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--MP_2uqYA--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1660924125613/Best-Canister-Miele-CX1.PNG",
    body: "This is such a must have vacuum! We own multiple pets and this little guy will pick everything up. We also own a rabbit, this actually does a great job in getting those small hard to get hay pieces.",
  },
  {
    userId: 4,
    productId: 5,
    stars: 5,
    headline: "Great eReader",
    previewImage:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6308/6308773_rd.jpg",
    body: "I've only used reader apps on my phone or tablet before now, so this is my first dedicated reader. So far, I love it.",
  },
  {
    userId: 5,
    productId: 5,
    stars: 5,
    headline: "excelente",
    previewImage:
      "https://thegadgetflow.com/wp-content/uploads/2022/09/Amazon-All-new-Kindle-2022-release-6-Inch-eReader-02.jpeg",
    body: "anda perfecta, la pantalla me gusta mucho porque le pega cualquier luz y aun así puedo leer.",
  },
  {
    userId: 2,
    productId: 6,
    stars: 5,
    headline: "My insights and tips. I love it!",
    previewImage:
      "http://mobileimages.lowes.com/productimages/79ce1f54-4f15-40ed-a2d9-ff931297d2dd/10870106.jpg",
    body: "It does what it's supposed to do. What you need to know is, there are lots of variables involved in getting the boiled egg you like. It's a matter of trial and error until you figure it out.",
  },
  {
    userId: 3,
    productId: 6,
    stars: 5,
    headline: "Medium Boiled Egg Lover - Satisfied!",
    previewImage:
      "https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-6-1670601489.png",
    body: "This egg cooker is fantastic. I love medium boiled eggs but, they are difficult to achieve. Not anymore! This egg cooker (I have the 6 egg version) did a great job!",
  },
  {
    userId: 4,
    productId: 7,
    stars: 3,
    headline: "It's pretty, but not organized well",
    previewImage:
      "https://m.media-amazon.com/images/I/41VLXVc2y9L._AC_SY780_.jpg",
    body: "The reviewer that mentioned that this may be best for a backpacker was exactly right. This is designed in a way that would be best fit for a college kid studying abroad across Europe or something, which I am not.",
  },
  {
    userId: 5,
    productId: 7,
    stars: 5,
    headline: "Love the prompts",
    previewImage:
      "https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1614315231/content-items/007/216/290/foto7-original.png?1614315231",
    body: "I love the prompts. I was confused if it should be used for all the same trip of different trips since I’m not backpacking for the summer.",
  },
  {
    userId: 2,
    productId: 8,
    stars: 3,
    headline: "Nice boots, but delivered scuffed twice",
    previewImage:
      "https://www.samedelman.com/blob/product-images/99900/ec/02/32832/ec0232832_pair_large.jpg",
    body: "I love these boots and have owned a pair I bought locally for years. They’re still in great condition, but I needed a half size bigger for a while now.",
  },
  {
    userId: 3,
    productId: 8,
    stars: 1,
    headline: "New or Used?",
    previewImage:
      "https://m.media-amazon.com/images/I/91llkJOYWdL._AC_UY580_.jpg",
    body: "The shoe fits well and the quality is great. 1 star due to scratches and scuffs on shoe. It looks like they were used as a floor model.",
  },
  {
    userId: 4,
    productId: 9,
    stars: 5,
    headline: "iPhone still worked after nine days underwater and dry",
    previewImage:
      "https://www.wecolormasks.com/wp-content/uploads/2021/04/waterproof.jpg",
    body: "I lost my iPhone while I’m the pouch, while I was kayaking and could not go down deep enough to get it. After nine days I had a message from a person that said he was scuba diving and saw it underwater.",
  },
  {
    userId: 5,
    productId: 9,
    stars: 5,
    headline: "My Phone Stayed Dry",
    previewImage:
      "https://www.travelandleisure.com/thmb/qPvXniNFYNzqDEH-GQmHLRorto0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-waterproof-phone-cases-of-2022-tout-02495ac160854c22b5be637c8e5b53e8.jpg",
    body: "LOVE IT!!! I used this case when we went to Negril, Jamaica. We spent 7 days there and were at the beach everyday. I used the case in the water swimming so I could have it with me. I had it under water 5 of the 7 days taking video and a few photos.",
  },
  {
    userId: 2,
    productId: 10,
    stars: 4,
    headline: "Dry on FLUFF or air dry -- may have spots after wash",
    previewImage:
      "https://www.ellesilk.com/media/catalog/product/cache/bbaebd824db027f617aca62415fff538/s/i/silk-pajamas-for-couples-sw03-sw01-a-dark-purple-a.jpg",
    body: "Was so disappointed at first! They fit fine, they're super soft and comfy and are such a pretty color.",
  },
  {
    userId: 3,
    productId: 10,
    stars: 5,
    headline: "Like it!",
    previewImage:
      "https://m.media-amazon.com/images/I/71wFjBz1RVL._AC_UY1000_.jpg",
    body: "I bought a black L last year, I liked it, just a little bit big, so I bought a pink M this year. If you wear between, choose a size down is better. Like it very much!",
  },
  {
    userId: 4,
    productId: 11,
    stars: 5,
    headline: "Smells amazing!!!",
    previewImage: "https://m.media-amazon.com/images/I/51mYiaDCdYL.jpg",
    body: "Love, love, love this product. I spray the shine spray in my hair after I blow dry and flat iron to achieve a nice shine and fabulous smell- I seriously smell my hair all day, this spray leaves such a tropical scent.",
  },
  {
    userId: 5,
    productId: 11,
    stars: 1,
    headline: "Guaranteed waste of money",
    previewImage:
      "http://www.matrix.com/~/media/redesign/product/total%20results/high%20amplify/flexible%20hairspray/totalresultshighamplifyflexiblehairspray289g2x.jpg",
    body: "First of all, it's flammable/explosive so ineligible for return at all time. If you pay you have zero chance to get your money backIf you still want to try, my pictures explain well.",
  },
  {
    userId: 1,
    productId: 12,
    stars: 4,
    headline: "Shark red",
    previewImage:
      "https://pyxis.nymag.com/v1/imgs/454/cdd/ecb44ca5239e74d9050c76e75acca51710-01-lip-tint-lede.2x.rsocial.w600.jpg",
    body: "I like it. But as other people said, color is kinda far from what is said",
  },
  {
    userId: 3,
    productId: 12,
    stars: 5,
    headline: "Like it",
    previewImage:
      "https://www.sephora.com/productimages/sku/s2563542-main-zoom.jpg",
    body: "I really like it,the color I pick it's smooth watermelon,smells good",
  },
  {
    userId: 4,
    productId: 13,
    stars: 5,
    headline: "A very capable coffee maker!",
    previewImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/coffeeb-lead-1663078243.jpg",
    body: "This basket allows you to get a cup of coffee before the brew cycle is complete by automatically closing a spring-loaded valve when you remove the carafe (thermos) from the coffee maker to pour a cup of coffee.",
  },
  {
    userId: 5,
    productId: 13,
    stars: 5,
    headline: "Wonderful little coffee maker for kitchen / small office",
    previewImage:
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--Y8R5TIPy--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1664561506000/Hero-20220916_KeurigKCafeHeroV4_Renzi.PNG",
    body: "I purchased this being tired of using the drip method and wasting coffee. I love this coffee maker. Easy clean up, easy set up and I set it up where it auto brews at 6:45 AM so I have to refill the grounds the night before.",
  },
  {
    userId: 1,
    productId: 14,
    stars: 1,
    headline: "This is Garbage",
    previewImage:
      "https://cdn-images.article.com/products/SKU12575/2890x1500/image44821.jpg",
    body: "On Day 2 of use, the handle fell off upon opening. It FELL off.This was not an occasion where I could tell that I was exerting too much force. I was exerting the minimal force necessary to OPEN the umbrella (i.e. use it).",
  },
  {
    userId: 3,
    productId: 14,
    stars: 1,
    headline: "Came broken, every stretcher was snapped off",
    previewImage:
      "https://assets.leevalley.com/Size5/10041/45K2050-xs-metro-compact-umbrella-u-0001.jpg",
    body: "Umbrella looked promising, until I saw that every stretcher was snapped off. The part you use to open it wasn't even connected. Not sure how many of these get sent out like this, but it seems like it is a lot more than it should be.",
  },
  {
    userId: 4,
    productId: 15,
    stars: 5,
    headline: "Nice Mask!",
    previewImage: "https://i1.perfumesclub.com/grande/178945.jpg",
    body: "I'm pleased with this mask! It's nice and thick, and though the pumpkin smell is subtle, it's there.",
  },
  {
    userId: 5,
    productId: 15,
    stars: 5,
    headline: "Spicy and Effective",
    previewImage: "https://m.media-amazon.com/images/I/51ONawYkF2L.jpg",
    body: "I was totally surprised with the over night results. I woke up to a refreshed, glowy and more vibrant face. I love the snell of these ingredients together, it reminds me of Thanksgiving.",
  },
  {
    userId: 1,
    productId: 16,
    stars: 5,
    headline: "Best thing ever!",
    previewImage:
      "https://image.lucrin.com/is/image/LucrinRender/900x600/OS2103-001_VCLS_ORG_ORG/e54e1b-db5c31-eb6e44-f18150-dc743a-ee8e47-dd6b33/leather-cell-phone-holder.jpg",
    body: "This stand is my best purchase in a long time. I watch “TV” on my phone or tablet. The photo is of my iPad in a fairly bulky case—being held without issue. The stand also holds my iPhone just as well.",
  },
  {
    userId: 3,
    productId: 16,
    stars: 5,
    headline: "The best phone holder ever!",
    previewImage:
      "https://i5.walmartimages.com/asr/6f35463c-5589-44a8-bf60-0f4d7afc5c73.0885bfe82f6616cdb11cc8dcf9bd16a2.jpeghttps://i5.walmartimages.com/asr/6f35463c-5589-44a8-bf60-0f4d7afc5c73.0885bfe82f6616cdb11cc8dcf9bd16a2.jpeg",
    body: "Oh my friends, if only you could look at my order history on this one!",
  },
  {
    userId: 4,
    productId: 17,
    stars: 5,
    headline: "Perfect For Cheese Lovers",
    previewImage:
      "https://www.archanaskitchen.com/images/archanaskitchen/World_Appetizers/cheese-crips-recipe-baked.jpg",
    body: "They would be good thrown into a bowl of tomato soup though. I preferred the cheddar by far! When I reordered, I went with the 3 count pack of just cheddar, and they are a perfect snack when you need a little something.",
  },
  {
    userId: 5,
    productId: 17,
    stars: 4,
    headline: "Shorted in shipment bought -12 got 10",
    previewImage:
      "https://static.onecms.io/wp-content/uploads/sites/19/2012/08/27/parmesan-crisps-oh-rff-4x3-1-2000.jpg",
    body: "I was shorted two bags. I know it’s NOT a lot but if everyone who ordered was shorted 2 bags...",
  },
  {
    userId: 1,
    productId: 18,
    stars: 5,
    headline: "Muy gentil",
    previewImage:
      "https://www.byrdie.com/thmb/P5rlTUML1jYjGXjh5Klq8Yae37w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-foam-cleansers-Byrdie-Recirc-DD-912b06165baf451694d3d6b86b78363b.png",
    body: "En lo personal no me gustan los jabones espumosos y este se me hizo ideal, es muy cremoso, se siente súper hidratante, además con un pump tienes para toda la cara, me encantó.",
  },
  {
    userId: 3,
    productId: 18,
    stars: 4,
    headline: "Is it like this for everyone else?",
    previewImage: "https://m.media-amazon.com/images/I/61ffzKMU87L.jpg",
    body: "I have tried the product before and I like it. My issue is the packaging. It comes with a sticker and it looks weird. Once I received it I thought I bought a knockoff.",
  },
  {
    userId: 4,
    productId: 19,
    stars: 4,
    headline:
      "Great plant based spray! But please market a different spray bottle head.",
    previewImage:
      "https://www.thespruce.com/thmb/-VFxDh9gatXyARsSrCU-AFiW2nM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-Home-v2-best-car-air-fresheners-4174832-ac7fff4e53be4a9893e5ca269dbdfd0e.jpg",
    body: "Love that this spray is plant based!The smell lasts on my couch and helps freshen it up from the dogs. The scent is okay. I prefer more of a citrus scent. But This scent is definitely a fresh smell, kids like it.",
  },
  {
    userId: 5,
    productId: 19,
    stars: 3,
    headline: "Comically small bottle",
    previewImage: "https://products.blains.com/600/68/683654.jpg",
    body: "Tiny bottle. Leaked in the packaging. Smells nice though",
  },
  {
    userId: 1,
    productId: 20,
    stars: 5,
    headline: "Bandage - Pack of 5",
    previewImage: "https://m.media-amazon.com/images/I/814wuzoB-7L.jpg",
    body: "The pack of five is excellent to use in advance of wearing shoes that are known to rub or if traveling and extensive walking is expected. Simply apply these cushions to clean dry feet in vulnerable areas like the back of the heel to provide a barrier between the shoe and skin.",
  },
  {
    userId: 3,
    productId: 20,
    stars: 4,
    headline: "very expensive, but works well for hiking",
    previewImage:
      "https://i5.walmartimages.com/asr/91b5249d-ef04-4ada-bb04-940073392c19.861e87be53ce78be4d0c29534f0fb647.jpeg",
    body: "These bandages are really expensive, but they do work well.",
  },
  {
    userId: 4,
    productId: 21,
    stars: 5,
    headline: "This is a Genie in a bottle",
    previewImage:
      "https://maxgrowshop.com/eng_pl_Plant-food-spikes-for-orchids-20-pcs-2175_1.jpg",
    body: "I started spraying my orchids with this about a month ago and they all have started growing new baby roots. It works and I'm gonna buy it again",
  },
  {
    userId: 5,
    productId: 21,
    stars: 5,
    headline: "Amazing for rehabbing orchids",
    previewImage: "https://i.ebayimg.com/images/g/dLoAAOSwBMBjK5n8/s-l500.jpg",
    body: "Literally saved my dehydrated orchids. Once I started using this I have seen new leaves sprouting from a very dehydrated orchid. If your looking to rehab an orchid this is the stuff for you.",
  },
  {
    userId: 1,
    productId: 22,
    stars: 5,
    headline: "So cute and great for the rain!",
    previewImage:
      "https://images.stylight.net/image/upload/t_web_product_330x440max_nobg/q_auto:eco,f_auto/j87vcy9aa7r9mnywptvj.jpg",
    body: "This is my first day with the shoes but I bought them for easy access and taking dog out for a walk on the rainy mornings. They are super comfortable but depending on your feet",
  },
  {
    userId: 2,
    productId: 22,
    stars: 5,
    headline: "Still dry and cozy",
    previewImage:
      "https://www.highsnobiety.com/static-assets/thumbor/j1Ppo9CLtY_a3rcKjJKL0ItoIsY=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/08/27125912/matthew-williams-givenchy-rubber-shoe-09.jpg",
    body: "Bought these for a trip to Seattle where it rained the entire week. My feet stayed dry and cozy, even after walking in wet sand at the beach. Not a big fan of the words on the boots but I can remove them with some alcohol.",
  },
  {
    userId: 4,
    productId: 23,
    stars: 5,
    headline: "Just What I Needed",
    previewImage:
      "https://www.pamperedchef.com/iceberg/com/product/1752-2-lg.jpg",
    body: "This product is exactly what I wanted and needed!! Perfect for pho. I brought it to work to use when i get ohofor lunch. It's sturdy and microwavable. I recommend",
  },
  {
    userId: 5,
    productId: 23,
    stars: 5,
    headline: "Great Bowl!!!",
    previewImage:
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
    body: "I got this for my son-in-law, he absolutely loves it. In fact he ask just tonight if he could get another one, so that when this one is dirty, he has another one to use.",
  },
  {
    userId: 1,
    productId: 24,
    stars: 5,
    headline: "Good product",
    previewImage:
      "https://cb.scene7.com/is/image/Crate/ArtesiaRndPlacematF15/$web_pdp_main_carousel_zoom_med$/220913132420/6-22-artesia-round-placemat.jpg",
    body: "Easy to clean and store away.",
  },
  {
    userId: 2,
    productId: 24,
    stars: 5,
    headline: "Convenient and so portable!",
    previewImage:
      "https://imgprd19.hobbylobby.com/2/83/6b/2836b10a48d6a3bf79b0e2048f748490662ef8ad/1400Wx1400H-1850650-0819.jpg",
    body: "I bought two of them and take them everywhere when we go visit people or restaurants. One thing I wish they had better is the bag. I wish their bag was a bit sturdier so I could actually carry them in it.",
  },
  {
    userId: 4,
    productId: 25,
    stars: 4,
    headline: "Dog loved it!",
    previewImage:
      "https://image.chewy.com/is/image/catalog/104397_MAIN._AC_SL1500_V1639680390_.jpg",
    body: "My dog loved this toy! He took it from me as soon as I took it out the box. Needless to say it only lasted 15 minutes. Lol. I thought it would be more durable…it was nice while it lasted. Lol",
  },
  {
    userId: 5,
    productId: 25,
    stars: 5,
    headline: "My dog’s favorite toy in the whole world!",
    previewImage:
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--SNpXU9gt--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1656106498222/8E4C0EAF-8F8E-4F32-9D5C-1EE974653649_1_201_a.jpeg",
    body: "This is the only toy my dog will play with.",
  },
  {
    userId: 1,
    productId: 26,
    stars: 5,
    headline: "Big difference",
    previewImage:
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--SNpXU9gt--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1656106498222/8E4C0EAF-8F8E-4F32-9D5C-1EE974653649_1_201_a.jpeg",
    body: "Wish I'd taken a before pic, been using this for 3 days now and can see a noticeable difference, highly recommend",
  },
  {
    userId: 2,
    productId: 26,
    stars: 5,
    headline: "I'm not sure about long term use but ...",
    previewImage:
      "https://cdn2.momjunction.com/wp-content/uploads/2021/12/11-Best-Charcoal-Toothpastes-For-Teeth-Whitening-In-2021.jpg",
    body: "My teeth are quite stained from tea/coffee and the odd red wine. This product reduced those stains after just brushing once!",
  },
  {
    userId: 4,
    productId: 27,
    stars: 4,
    headline: "simple",
    previewImage:
      "https://cdn.thewirecutter.com/wp-content/media/2022/05/roomfans_2048px_honeywell.jpg",
    body: "good for small spaces or a personal desk fan. i got this for my dog and he loves it",
  },
  {
    userId: 5,
    productId: 27,
    stars: 5,
    headline: "LOVE IT! Bought another one same day it arrived!",
    previewImage: "https://dalap.eu/394-large_default/table-fans.jpg",
    body: "I thought about a laptop usb fan, but they are more than I wanted to pay for one, and reviews weren't all that great. I can't remember how I came across this fan at a deal price, but I did, and the reviews were great so I grabbed it for $12.79.",
  },
  {
    userId: 1,
    productId: 28,
    stars: 1,
    headline: "Do not buy.",
    previewImage: "https://nocry.com/static/LISTING-2-3-1920x1920.jpg",
    body: "Broken after one use. Waste of time.",
  },
  {
    userId: 2,
    productId: 28,
    stars: 2,
    headline: "Bought off boyfriends prime account",
    previewImage:
      "https://womanswork.com/pub/media/catalog/product/cache/f5a972551f1f20bceb45ac7d6b65534f/5/0/500glvweb_staffpick.jpg",
    body: "I didn’t expect these gloves to bee too great, but hell I expected them to be a little bit better than what they are.",
  },
  {
    userId: 4,
    productId: 29,
    stars: 4,
    headline: "better than other markers",
    previewImage:
      "https://cdn.artbeek.com/media/catalog/product/cache/55ce80b811bc381b7e7cdb09b0d1d41c/_/8/_80_1_.jpg",
    body: "Bought three different brands. This one was by far the best of the three.",
  },
  {
    userId: 5,
    productId: 29,
    stars: 4,
    headline: "Good markers!",
    previewImage:
      "https://shop.crayola.com/on/demandware.static/-/Sites-crayola-storefront/default/dw46dedae7/images/58-8370_Clicks-Retractable-Markers-10ct_PDP_Main.jpg",
    body: "I’ve been quite pleased with these. My kids have used the markers for numerous art projects and they still feel really heavy with ink. They’re also fairly easy to wash off skin, and completely wiped off a white dresser, thank God.",
  },
  {
    userId: 1,
    productId: 30,
    stars: 3,
    headline: "Functional but not pretty",
    previewImage:
      "https://i5.walmartimages.com/asr/3cf87a00-c6f0-4dbc-bd63-615938c0cf8e.6c67f81736b8a5f74fdb12022c6cf44c.jpeg",
    body: "The product is fine but does not look as aesthetically pleasing as the photos led me to expect. I purchased this product because I thought the handles were a cool metallic teal black ombre.",
  },
  {
    userId: 2,
    productId: 30,
    stars: 3,
    headline: "Color does not match",
    previewImage:
      "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Jump%20Ropes%20/Weighted%20Ropes/AD0099/AD0099-H_hvbuun.png",
    body: "They'll work but I'm disappointed about the color.. that is not at all what they looked like in the photo. I should've just gone for black, instead of blue.",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Review.bulkCreate(reviews, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
