const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const productsRouter = require("./products.js");
const reviewsRouter = require("./reviews.js");
const imagesRouter = require("./images.js");
const descriptionsRouter = require("./descriptions.js");
const productOrdersRouter = require("./productorders.js");
const ordersRouter = require("./orders.js");
const questionsRouter = require("./questions.js");
const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/products", productsRouter);

router.use("/reviews", reviewsRouter);

router.use("/images", imagesRouter);

router.use("/descriptions", descriptionsRouter);

router.use("/productorders", productOrdersRouter);

router.use("/orders", ordersRouter);

router.use("/questions", questionsRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
