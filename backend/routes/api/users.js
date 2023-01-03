const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  Description,
  Image,
  Order,
  Product,
  ProductOrder,
  Review,
  User,
} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("phone")
    .exists({ checkFalsy: true })
    .isLength({ min: 7 })
    .withMessage("Please provide a phone number with at least 10 digits."),
  check("phone")
    .not()
    .isEmail()
    .withMessage("Phone number cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

const mapProducts = async (products) => {
  for await (const product of products) {
    const reviews = await Review.findAll({
      where: {
        productId: product.id,
      },
    });
    const reviewStars = await Review.findAll({
      where: {
        productId: product.id,
      },
    });
    let sum = 0.0;
    reviewStars.forEach((reviewStar) => {
      sum += reviewStar.stars;
    });
    product.dataValues.numReviews = reviews.length;
    product.dataValues.avgStarRating = sum / reviews.length;
  }
  return products;
};

const mapOrders = async (orders) => {
  for await (const order of orders) {
    const productOrders = await ProductOrder.findAll({
      where: {
        orderId: order.id,
      },
    });
    let sum = 0.0;
    for await (const productOrder of productOrders) {
      const product = await Product.findOne({
        where: {
          productId: productOrder.productId,
        },
      });
      let i = 0;
      while (i < productOrder.quantity) {
        sum += product.price;
      }
    }
    order.dataValues.total = sum;
  }
  return orders;
};

router.get("/current/cart", async (req, res) => {
  const { user } = req;

  // let orders = await Order.findAll({
  let Orders = await Order.findOne({
    where: {
      userId: user.id,
      status: "cart",
    },
    include: [
      {
        model: ProductOrder,
        // through: { attributes: ["quantity"] },
        include: [
          {
            model: Product,
          },
        ],
      },
    ],
  });

  // const orderAggregates = await mapOrders(orders);

  return res.json(
    // Orders: orderAggregates,
    Orders
  );
});

router.get("/current/orders", async (req, res) => {
  const { user } = req;

  // let orders = await Order.findAll({
  let Orders = await Order.findAll({
    where: {
      userId: user.id,
      status: "ordered",
    },
    include: [
      {
        model: ProductOrder,
        // through: { attributes: ["quantity"] },
        include: [
          {
            model: Product,
          },
        ],
      },
    ],
  });

  // const orderAggregates = await mapOrders(orders);

  return res.json({
    // Orders: orderAggregates,
    Orders,
  });
});

router.get("/current/reviews", async (req, res) => {
  const { user } = req;

  const Reviews = await Review.findAll({
    where: {
      userId: user.id,
    },
    include: [
      {
        model: Image,
      },
      {
        model: User,
      },
    ],
  });

  return res.json({
    Reviews,
  });
});

router.get("/current/products", async (req, res) => {
  const { user } = req;

  let products = await Product.findAll({
    where: {
      merchantId: user.id,
    },
    include: [
      {
        model: Description,
      },
      {
        model: User,
      },
      {
        model: Review,
      },
    ],
  });

  const productAggregates = await mapProducts(products);

  return res.json({
    Products: productAggregates,
  });
});

router.get("/:userId/reviews", async (req, res) => {
  let { userId } = req.params;
  userId = parseInt(userId);

  const user = await User.findByPk(userId);

  if (!user) {
    res.status(404);
    return res.json({
      message: "User couldn't be found",
      statusCode: 404,
    });
  }

  const Reviews = await Review.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: Image,
      },
      {
        model: User,
      },
    ],
  });

  return res.json({
    Reviews,
  });
});

router.get("/:userId", async (req, res) => {
  let { userId } = req.params;
  userId = parseInt(userId);

  const user = await User.findByPk(userId, {
    attributes: [
      "id",
      "firstName",
      "lastName",
      "merchant",
      "merchantName",
      "email",
      "phone",
      "prime",
      "previewImage",
    ],
  });

  return res.json(user);
});

router.post("/", validateSignup, async (req, res) => {
  const { email, password, phone } = req.body;
  const user = await User.signup({ email, phone, password });

  await setTokenCookie(res, user);

  return res.json({
    user,
  });
});

module.exports = router;
