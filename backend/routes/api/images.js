const express = require("express");

const router = express.Router();

const { Image, Product, Review } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

router.delete("/:imageId", requireAuth, async (req, res) => {
  const { user } = req;
  const { imageId } = req.params;

  const image = await Image.findByPk(imageId);

  if (!image) {
    res.status(404);
    return res.json({
      message: "Image couldn't be found",
      statusCode: 404,
    });
  }

  if (image.imageableType === "product") {
    const product = await Product.findOne({
      where: {
        id: image.imageableId,
      },
    });

    if (!product) {
      res.status(404);
      return res.json({
        message: "Product could not be found",
        statusCode: 404,
      });
    }

    if (user.id === product.merchantId) {
      await image.destroy();
      res.status(200);
      return res.json({
        message: "Successfully deleted",
        statusCode: 200,
      });
    } else {
      res.status(403);
      return res.json({
        message: "Forbidden",
        statusCode: 403,
      });
    }
  } else {
    const review = await Review.findOne({
      where: {
        id: image.imageableId,
      },
    });

    if (!review) {
      res.status(404);
      return res.json({
        message: "Review could not be found",
        statusCode: 404,
      });
    }

    if (user.id === review.userId) {
      await image.destroy();
      res.status(200);
      return res.json({
        message: "Successfully deleted",
        statusCode: 200,
      });
    } else {
      res.status(403);
      return res.json({
        message: "Forbidden",
        statusCode: 403,
      });
    }
  }
});

module.exports = router;
