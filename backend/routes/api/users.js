const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Image, Review, User } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("phone")
    .exists({ checkFalsy: true })
    .isLength({ min: 10 })
    .withMessage("Please provide a phone number with at least 10 digits."),
  check("phone")
    .not()
    .isEmail()
    .withMessage("Phone number cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

router.get("/current/reviews", async (req, res) => {
  const { user } = req;

  const Reviews = await Review.findAll({
    where: {
      userId: user.id,
    },
    include: [
      {
        model: Image,
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

router.get("/:userId/reviews", async (req, res) => {
  let { userId } = req.params;
  userId = parseInt(userId);

  const user = await User.findByPk(userId);

  if (!user) {
    res.status(404);
    return res.json({
      message: "User couldn't be found",
      statusCode: 404,
    });
  }

  const Reviews = await Review.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: Image,
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

router.get("/:userId", async (req, res) => {
  let { userId } = req.params;
  userId = parseInt(userId);

  const user = await User.findByPk(userId, {
    attributes: [
      "id",
      "firstName",
      "lastName",
      "merchant",
      "merchantName",
      "email",
      "phone",
      "prime",
      "previewImage",
    ],
  });

  return res.json(user);
});

router.post("/", validateSignup, async (req, res) => {
  const { email, password, phone } = req.body;
  const user = await User.signup({ email, phone, password });

  await setTokenCookie(res, user);

  return res.json({
    user,
  });
});

module.exports = router;
