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
    .withMessage(
      "Wrong or Invalid email address. Please correct and try again."
    ),
  check("phone")
    .exists({ checkFalsy: true })
    .isLength({ min: 7 })
    .withMessage(
      "Wrong or Invalid mobile phone number. Please correct and try again."
    ),
  check("phone")
    .not()
    .isEmail()
    .withMessage("Phone number cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Minimum 6 characters required"),
  handleValidationErrors,
];

const validateProductOrder = [
  check("quantity")
    .exists({ checkFalsy: true })
    .isInt({ min: 1, max: 30 })
    .withMessage("Quantity is invalid"),
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

router.get("/current/cart/productorders", requireAuth, async (req, res) => {
  const { user } = req;

  let order = await Order.findOne({
    where: {
      userId: user.id,
      status: "cart",
    },
  });

  if (!order) {
    // res.status(404);
    return res.json({
      // message: "Cart is empty",
      // statusCode: 404,
    });
  }

  let ProductOrders = await ProductOrder.findAll({
    where: {
      orderId: order.id,
    },
    attributes: [
      "id",
      "productId",
      "orderId",
      "quantity",
      "createdAt",
      "updatedAt",
    ],
    include: [
      {
        model: Product,
      },
    ],
  });

  return res.json({
    ProductOrders,
  });
});

router.get("/current/cart", requireAuth, async (req, res) => {
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
        attributes: ["id", "productId", "orderId", "quantity"],
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

router.put("/current/cart", requireAuth, async (req, res) => {
  const { user } = req;

  let order = await Order.findOne({
    where: {
      userId: user.id,
      status: "cart",
    },
    // include: [
    //   {
    //     model: ProductOrder,
    //     include: [
    //       {
    //         model: Product,
    //       },
    //     ],
    //   },
    // ],
  });

  if (!order) {
    res.status(404);
    return res.json({
      message: "Cart is empty",
      statusCode: 404,
    });
  }

  if (user.id !== order.userId) {
    res.status(403);
    return res.json({
      message: "Current user must be the shopper to pay",
      statusCode: 403,
    });
  }

  order.update({
    status: "ordered",
  });

  const updatedOrder = await Order.findByPk(order.id, {
    include: [
      {
        model: ProductOrder,
        include: [
          {
            model: Product,
          },
        ],
      },
    ],
  });

  return res.json(updatedOrder);
});

router.get("/current/orders", requireAuth, async (req, res) => {
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

router.post(
  "/current/productorders",
  requireAuth,
  validateProductOrder,
  async (req, res) => {
    const { user } = req;
    let { productId, quantity } = req.body;
    productId = parseInt(productId);
    quantity = parseInt(quantity);
    let createdProductOrder;

    const order = await Order.findOne({
      where: {
        userId: user.id,
        status: "cart",
      },
    });

    if (!order) {
      const newOrder = await Order.create({
        userId: user.id,
        status: "cart",
      });

      const productOrder = await ProductOrder.findOne({
        where: {
          productId,
          orderId: newOrder.id,
        },
      });

      if (!productOrder) {
        const newProductOrder = await ProductOrder.create({
          productId,
          orderId: newOrder.id,
          quantity,
        });

        createdProductOrder = await ProductOrder.findOne({
          where: {
            productId,
            orderId: newOrder.id,
          },
          attributes: [
            "id",
            "productId",
            "orderId",
            "quantity",
            "createdAt",
            "updatedAt",
          ],
        });

        res.status(201);
        return res.json(createdProductOrder);
      } else {
        let newQuantity = parseInt(productOrder.quantity) + quantity;

        productOrder.update({
          quantity: newQuantity,
        });

        const updatedProductOrder = await ProductOrder.findOne({
          where: {
            productId,
            orderId: order.id,
          },
          attributes: [
            "id",
            "productId",
            "orderId",
            "quantity",
            "createdAt",
            "updatedAt",
          ],
        });

        return res.json(updatedProductOrder);
      }
    } else {
      const productOrder = await ProductOrder.findOne({
        where: {
          productId,
          orderId: order.id,
        },
      });

      if (!productOrder) {
        const newProductOrder = await ProductOrder.create({
          productId,
          orderId: order.id,
          quantity,
        });

        createdProductOrder = await ProductOrder.findOne({
          where: {
            productId,
            orderId: order.id,
          },
          attributes: [
            "id",
            "productId",
            "orderId",
            "quantity",
            "createdAt",
            "updatedAt",
          ],
        });

        res.status(201);
        return res.json(createdProductOrder);
      } else {
        let newQuantity = parseInt(productOrder.quantity) + quantity;

        productOrder.update({
          quantity: newQuantity,
        });

        const updatedProductOrder = await ProductOrder.findOne({
          where: {
            productId,
            orderId: order.id,
          },
          attributes: [
            "id",
            "productId",
            "orderId",
            "quantity",
            "createdAt",
            "updatedAt",
          ],
        });

        return res.json(updatedProductOrder);
      }
    }
  }
);

router.get("/current/reviews", requireAuth, async (req, res) => {
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

router.get("/current/products", requireAuth, async (req, res) => {
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
      // "merchant",
      // "merchantName",
      "email",
      "phone",
      // "prime",
      "previewImage",
    ],
  });

  return res.json(user);
});

router.post("/", validateSignup, async (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body;
  const user = await User.signup({
    firstName,
    lastName,
    phone,
    email,
    password,
  });

  await setTokenCookie(res, user);

  return res.json({
    user,
  });
});

module.exports = router;
