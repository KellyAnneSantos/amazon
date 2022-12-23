const express = require("express");

const router = express.Router();

const {
  Description,
  Image,
  Product,
  Review,
  User,
} = require("../../db/models");

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
    ],
  });
  const productPlus = await aggregateReviews(product);

  return res.json(productPlus);
});

router.get("/", async (req, res) => {
  const Products = await Product.findAll();

  return res.json({ Products });
});

module.exports = router;
