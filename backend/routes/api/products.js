const express = require("express");

const router = express.Router();

const { Product } = require("../../db/models");

router.get("/:productId", async (req, res) => {
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

  return res.json(product);
});

module.exports = router;
