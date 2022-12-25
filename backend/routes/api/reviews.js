const express = require("express");

const router = express.Router();

const { Review } = require("../../db/models");

router.put("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const { stars, headline, previewImage, body } = req.body;
  const { user } = req;

  const reviews = await Review.findByPk(reviewId);

  if (!reviews) {
    res.status(404);
    return res.json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === reviews.userId) {
    await reviews.update({
      stars,
      headline,
      previewImage,
      body,
    });

    return res.json(reviews);
  } else {
    res.status(403);
    return res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }
});

module.exports = router;
