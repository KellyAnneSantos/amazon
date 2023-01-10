const express = require("express");

const router = express.Router();

const { Description } = require("../../db/models");
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

router.get("/:descriptionId", async (req, res) => {
  let { descriptionId } = req.params;
  descriptionId = parseInt(productId);

  let description = await Description.findByPk(descriptionId);

  if (!description) {
    res.status(404);
    return res.json({
      message: "Description couldn't be found",
      statusCode: 404,
    });
  }

  return res.json(description);
});

router.put(
  "/:descriptionId",
  requireAuth,
  validateDescription,
  async (req, res) => {
    const { descriptionId } = req.params;
    const { bulletPoint } = req.body;
    const { user } = req;

    const description = await Description.findByPk(descriptionId);

    if (!description) {
      res.status(404);
      return res.json({
        message: "Description couldn't be found",
        statusCode: 404,
      });
    }

    if (user.id === description.merchantId) {
      await review.update({
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

router.delete("/:descriptionId", requireAuth, async (req, res) => {
  const { descriptionId } = req.params;
  const { user } = req;

  const description = await Description.findByPk(descriptionId);

  if (!description) {
    res.status(404);
    return res.json({
      message: "Description couldn't be found",
      statusCode: 404,
    });
  }

  if (user.id === description.merchantId) {
    await description.destroy();

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
