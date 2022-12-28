const express = require("express");

const router = express.Router();

const { Image, Review } = require("../../db/models");

router.get("/:reviewId/images", async (req, res) => {
  let { reviewId } = req.params;
  reviewId = parseInt(reviewId);

  const review = await Review.findByPk(reviewId);

  if (!review) {
    res.status(404);
    return res.json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }

  const Images = await Image.findAll({
    where: {
      imageableId: review.id,
      imageableType: "review",
    },
  });

  return res.json({
    Images,
  });
});

router.post("/:reviewId/images", async (req, res) => {
  const { mediaUrl } = req.body;
  let { reviewId } = req.params;
  reviewId = parseInt(reviewId);
  const { user } = req;

  const review = await Review.findByPk(reviewId);

  if (!review) {
    res.status(404);
    return res.json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }

  const image = await Image.create({
    imageableId: reviewId,
    imageableType: "review",
    mediaType: "image",
    mediaUrl,
  });

  return res.json(image);
});

router.put("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const { stars, headline, previewImage, body } = req.body;
  const { user } = req;

  const review = await Review.findByPk(reviewId);

  if (!review) {
    res.status(404);
    return res.json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === review.userId) {
    await review.update({
      stars,
      headline,
      previewImage,
      body,
    });

    return res.json(review);
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
});

router.delete("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const { user } = req;

  const review = await Review.findByPk(reviewId);

  if (!review) {
    res.status(404);
    return res.json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === review.userId) {
    await review.destroy();

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
});

module.exports = router;
