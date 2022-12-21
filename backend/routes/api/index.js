const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const productsRouter = require("./products.js");
const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/products", productsRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
