const express = require("express");

const router = express.Router();

const {
  Description,
  Image,
  Product,
  Review,
  User,
  sequelize,
} = require("../../db/models");

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
    attributes: [
      "id",
      "merchantId",
      "name",
      "department",
      "price",
      "size",
      "color",
      "description",
      "freeReturn",
      "deliveryPrice",
      "deliveryTime",
      "prime",
      "previewImage",
      "createdAt",
      "updatedAt",
      [sequelize.fn("COUNT", sequelize.col("Reviews.id")), "numReviews"],
    ],
    group: ["Product.id", "Descriptions.id", "User.id"],
  });

  return res.json(product);
});

module.exports = router;
