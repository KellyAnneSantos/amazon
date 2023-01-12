const express = require("express");

const router = express.Router();

const {
  Answer,
  Description,
  Image,
  Product,
  Question,
  Review,
  sequelize,
  User,
} = require("../../db/models");
const { Op } = require("sequelize");
const { environment } = require("../../config");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const validateDescription = [
  check("bulletPoint")
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 255 })
    .withMessage(
      "Description body is required and must be 255 characters or less"
    ),
  handleValidationErrors,
];

const validateImage = [
  check("imageableType")
    .isIn(["product", "review"])
    .withMessage("Type must be product or review"),
  check("mediaUrl")
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 255 })
    .withMessage("Media URL is required and must be 255 characters or less"),
  handleValidationErrors,
];

const validateReview = [
  check("stars")
    .isInt({ min: 1, max: 5 })
    .withMessage("Stars must be an integer from 1 to 5"),
  check("headline")
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 255 })
    .withMessage("Headline is required and must be 255 characters or less"),
  check("previewImage")
    .exists({ checkFalsy: true })
    .isLength({ min: 5, max: 255 })
    .withMessage(
      "Preview image is required and must be between 5 and 255 characters"
    ),
  check("body")
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 255 })
    .withMessage("Review body is required and must be 255 characters or less"),
  handleValidationErrors,
];

const validateProduct = [
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 255 })
    .withMessage(
      "Product name is required and must be between 2 and 255 characters"
    ),
  check("department")
    .exists({ checkFalsy: true })
    .isIn([
      "Alexa",
      "Appliances",
      "Arts",
      "Audible",
      "Auto",
      "Baby",
      "Beauty",
      "Books",
      "CDs",
      "Cellular",
      "Clothing",
      "Collectibles",
      "Computers",
      "Credit",
      "Devices",
      "Electronics",
      "Education",
      "Games",
      "Garden",
      "Grocery",
      "Handmade",
      "Health",
      "Home",
      "Industrial",
      "Kindle",
      "Luxury",
      "Magazines",
      "Music",
      "Office",
      "Pets",
      "Pharmacy",
      "Prime",
      "Services",
      "Software",
      "Sports",
      "Tools",
      "Toys",
      "Travel",
      "Video",
      "Warehouse",
    ])
    .withMessage("Department must be an existing department"),
  check("price")
    .exists({ checkFalsy: true })
    .isFloat({ min: 0.01 })
    .withMessage("Price is invalid"),
  check("description")
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 255 })
    .withMessage("Description is required and must be 255 characters or less"),
  check("previewImage")
    .exists({ checkFalsy: true })
    .isLength({ min: 5, max: 255 })
    .withMessage(
      "Preview image is required and must be between 5 and 255 characters"
    ),
  handleValidationErrors,
];

const validateQuery = [
  check("page")
    .optional({ nullable: true })
    .isInt({ min: 0 })
    .withMessage("Page must be greater than or equal to 0"),
  check("size")
    .optional({ nullable: true })
    .isInt({ min: 0 })
    .withMessage("Size must be greater than or equal to 0"),
  check("name")
    .optional({ nullable: true })
    .isString()
    .withMessage("Name must be a string"),
  check("department")
    .optional({ nullable: true })
    .isIn([
      "Alexa",
      "Appliances",
      "Arts",
      "Audible",
      "Auto",
      "Baby",
      "Beauty",
      "Books",
      "CDs",
      "Cellular",
      "Clothing",
      "Collectibles",
      "Computers",
      "Credit",
      "Devices",
      "Electronics",
      "Education",
      "Games",
      "Garden",
      "Grocery",
      "Handmade",
      "Health",
      "Home",
      "Industrial",
      "Kindle",
      "Luxury",
      "Magazines",
      "Music",
      "Office",
      "Pets",
      "Pharmacy",
      "Prime",
      "Services",
      "Software",
      "Sports",
      "Tools",
      "Toys",
      "Travel",
      "Video",
      "Warehouse",
    ])
    .withMessage("Department must be an existing department"),
  check("minPrice")
    .optional({ nullable: true })
    .isFloat({ min: 0.0 })
    .withMessage("Minimum price must be greater than or equal to 0"),
  check("maxPrice")
    .optional({ nullable: true })
    .isFloat({ min: 0.0 })
    .withMessage("Minimum price must be greater than or equal to 0"),
  handleValidationErrors,
];

const aggregateReviews = async (product) => {
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
  return product;
};

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

router.get("/:productId/descriptions", async (req, res) => {
  let { productId } = req.params;
  productId = parseInt(productId);

  const product = await Product.findByPk(productId);

  if (!product) {
    res.status(404);
    return res.json({
      message: "Product couldn't be found",
      statusCode: 404,
    });
  }

  const Descriptions = await Description.findAll({
    where: {
      productId,
    },
  });

  return res.json({
    Descriptions,
  });
});

router.post(
  "/:productId/descriptions",
  requireAuth,
  validateDescription,
  async (req, res) => {
    const { bulletPoint } = req.body;
    let { productId } = req.params;
    productId = parseInt(productId);
    const { user } = req;

    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404);
      return res.json({
        message: "Product couldn't be found",
        statusCode: 404,
      });
    }

    if (user.id === product.merchantId) {
      const description = await Description.create({
        merchantId: user.id,
        productId,
        bulletPoint,
      });

      return res.json(description);
    } else {
      res.status(403);
      return res.json({
        message: "Forbidden",
        statusCode: 403,
      });
    }
  }
);

router.get("/:productId/images", async (req, res) => {
  let { productId } = req.params;
  productId = parseInt(productId);

  const product = await Product.findByPk(productId);

  if (!product) {
    res.status(404);
    return res.json({
      message: "Product couldn't be found",
      statusCode: 404,
    });
  }

  const Images = await Image.findAll({
    where: {
      imageableId: product.id,
      imageableType: "product",
    },
  });

  return res.json({
    Images,
  });
});

router.post(
  "/:productId/images",
  requireAuth,
  validateImage,
  async (req, res) => {
    const { mediaUrl } = req.body;
    let { productId } = req.params;
    productId = parseInt(productId);
    const { user } = req;

    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404);
      return res.json({
        message: "Product couldn't be found",
        statusCode: 404,
      });
    }

    if (user.id === product.merchantId) {
      const image = await Image.create({
        imageableId: productId,
        imageableType: "product",
        // mediaType: "image",
        mediaUrl,
      });

      return res.json(image);
    } else {
      res.status(403);
      return res.json({
        message: "Forbidden",
        statusCode: 403,
      });
    }
  }
);

router.get("/:productId/reviews", async (req, res) => {
  let { productId } = req.params;
  productId = parseInt(productId);

  const product = await Product.findByPk(productId);

  if (!product) {
    res.status(404);
    return res.json({
      message: "Product couldn't be found",
      statusCode: 404,
    });
  }

  const Reviews = await Review.findAll({
    include: [
      {
        model: Image,
      },
      {
        model: Product,
        where: {
          id: productId,
        },
        attributes: [],
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

router.post(
  "/:productId/reviews",
  requireAuth,
  validateReview,
  async (req, res) => {
    const { stars, headline, previewImage, body } = req.body;
    let { productId } = req.params;
    productId = parseInt(productId);
    const { user } = req;

    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404);
      return res.json({
        message: "Product couldn't be found",
        statusCode: 404,
      });
    }

    let review = await Review.findOne({
      where: {
        productId,
        userId: user.id,
      },
    });

    if (review) {
      res.status(400);
      return res.json({
        message:
          "User already wrote a review of this product. Please edit the existing review instead.",
        statusCode: 400,
      });
    }

    const newReview = await Review.create({
      userId: user.id,
      productId,
      stars,
      headline,
      previewImage,
      body,
    });

    return res.json(newReview);
  }
);

router.get("/:productId", async (req, res) => {
  let { productId } = req.params;
  productId = parseInt(productId);

  let product = await Product.findByPk(productId);

  if (!product) {
    return res.json({
      id: 999999999,
      merchantId: 1,
      name: "Dog",
      department: "New",
      price: 5.0,
      description: "Fake Product",
      freeReturn: true,
      prime: true,
      previewImage:
        "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      numReviews: 0,
      avgStarRating: 0,
      Descriptions: [],
      User: {},
      Reviews: [],
      Questions: [],
    });
  }

  product = await Product.findByPk(productId, {
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
      {
        model: Question,
        include: {
          model: Answer,
        },
      },
    ],
  });
  const productPlus = await aggregateReviews(product);

  return res.json(productPlus);
});

router.put("/:productId", requireAuth, validateProduct, async (req, res) => {
  const { user } = req;
  let {
    name,
    department,
    price,
    description,
    freeReturn,
    prime,
    previewImage,
  } = req.body;
  let { productId } = req.params;

  const product = await Product.findByPk(productId);

  if (!product) {
    res.status(404);
    return res.json({
      message: "Product couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === product.merchantId) {
    product.update({
      name,
      department,
      price,
      description,
      freeReturn,
      prime,
      previewImage,
    });

    return res.json(product);
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
});

router.get("/", validateQuery, async (req, res) => {
  let { name, prime, department, minPrice, maxPrice, page, size } = req.query;

  let where = {};
  let pagination = {};
  const isProduction = environment === "production";

  if (isProduction) {
    if (name) {
      where.name = { [Op.iLike]: `%${name}%` };
    }
  } else {
    if (name) {
      where.name = { [Op.like]: `%${name}%` };
    }
  }

  if (prime) {
    where.prime = true;
  }

  if (department) {
    where.department = department;
  }

  if (minPrice && !maxPrice) {
    where.price = {
      [Op.gte]: minPrice,
    };
  } else if (maxPrice && !minPrice) {
    where.price = {
      [Op.lte]: maxPrice,
    };
  } else if (maxPrice && minPrice) {
    where.price = {
      [Op.between]: [minPrice, maxPrice],
    };
  }

  if (!page) {
    page = 0;
  }

  if (!size) {
    size = 500000;
  }

  page = parseInt(page);
  size = parseInt(size);

  if (Number.isNaN(page) || page < 0 || page > 10) {
    page = 0;
  } else {
    page = page;
  }

  if (Number.isNaN(size) || size < 0 || size > 500000) {
    size = 500000;
  } else {
    size = size;
  }

  if (page > 0) {
    pagination.limit = size;
    pagination.offset = size * (page - 1);
  } else {
    pagination.limit = size;
  }

  let products = await Product.findAll({
    where,
    ...pagination,
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
      {
        model: Question,
        include: {
          model: Answer,
        },
      },
    ],
  });

  const productAggregates = await mapProducts(products);

  return res.json({
    Products: productAggregates,
    page,
    size,
  });
});

router.post("/", requireAuth, validateProduct, async (req, res) => {
  let {
    name,
    department,
    price,
    description,
    freeReturn,
    prime,
    previewImage,
  } = req.body;
  const { user } = req;
  price = parseInt(price);
  const newProduct = await Product.create({
    merchantId: user.id,
    name,
    department,
    price,
    description,
    freeReturn,
    prime,
    previewImage,
  });

  res.status(201);
  return res.json(newProduct);
});

module.exports = router;
