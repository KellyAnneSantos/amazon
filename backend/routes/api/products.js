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

router.post("/:productId/descriptions", async (req, res) => {
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

  const description = await Description.create({
    merchantId: user.id,
    productId,
    bulletPoint,
  });

  return res.json(description);
});

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

router.post("/:productId/images", async (req, res) => {
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

  const image = await Image.create({
    imageableId: productId,
    imageableType: "product",
    mediaType: "image",
    mediaUrl,
  });

  return res.json(image);
});

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

router.post("/:productId/reviews", async (req, res) => {
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

  const review = await Review.create({
    userId: user.id,
    productId,
    stars,
    headline,
    previewImage,
    body,
  });

  return res.json(review);
});

router.get("/:productId", async (req, res) => {
  let { productId } = req.params;
  productId = parseInt(productId);

  let product = await Product.findByPk(productId);

  if (!product) {
    res.status(404);
    return res.json({
      message: "Product couldn't be found",
      statusCode: 404,
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

router.put("/:productId", async (req, res) => {
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

router.get("/", async (req, res) => {
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

router.post("/", async (req, res) => {
  const {
    name,
    department,
    price,
    description,
    freeReturn,
    prime,
    previewImage,
  } = req.body;
  const { user } = req;
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
