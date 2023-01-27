const express = require("express");

const router = express.Router();

const { Helpful, Image, Review } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

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

router.get("/:reviewId/helpfuls", async (req, res) => {
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

  const Helpfuls = await Helpful.findAll({
    where: {
      helpableId: review.id,
      helpableType: "review",
    },
  });

  return res.json({
    Helpfuls,
  });
});

router.post("/:reviewId/helpfuls", requireAuth, async (req, res) => {
  const { helpfulStatus } = req.body;
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

  if (user.id !== review.userId) {
    const helpful = await Helpful.create({
      userId: user.id,
      helpableId: reviewId,
      helpableType: "review",
      helpfulStatus,
    });

    return res.json(helpful);
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
});

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

router.post(
  "/:reviewId/images",
  requireAuth,
  validateImage,
  async (req, res) => {
    const { mediaUrl } = req.body;
    let { reviewId } = req.params;
    reviewId = parseInt(reviewId);
    const { user } = req;

    const review = await Review.findByPk(reviewId, {
      include: [{ model: Image }],
    });

    if (!review) {
      res.status(404);
      return res.json({
        message: "Review couldn't be found",
        statusCode: 404,
      });
    }

    if (review.Images.length >= 9) {
      res.status(400);
      return res.json({
        message: "Maximum 10 images are allowed",
        statusCode: 400,
      });
    }

    if (user.id === review.userId) {
      const image = await Image.create({
        imageableId: reviewId,
        imageableType: "review",
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

router.put("/:reviewId", requireAuth, validateReview, async (req, res) => {
  let { reviewId } = req.params;
  reviewId = parseInt(reviewId);
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

router.delete("/:reviewId", requireAuth, async (req, res) => {
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
