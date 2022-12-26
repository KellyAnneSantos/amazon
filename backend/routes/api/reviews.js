const express = require("express");

const router = express.Router();

const { Review } = require("../../db/models");

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

module.exports = router;
