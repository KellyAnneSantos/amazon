const express = require("express");

const router = express.Router();

const { Order, ProductOrder } = require("../../db/models");

router.get("/:productOrderId", async (req, res) => {
  let { productOrderId } = req.params;
  productOrderId = parseInt(productOrderId);

  // const productOrder = await ProductOrder.findByPk(productOrderId);
  // returns where productorder.productid = productorderid

  const productOrder = await ProductOrder.findOne({
    where: {
      id: productOrderId,
    },
  });

  return res.json(productOrder);
});

router.delete("/:productOrderId", async (req, res) => {
  let { productOrderId } = req.params;
  const { user } = req;
  productOrderId = parseInt(productOrderId);

  // const productOrder = await ProductOrder.findByPk(productOrderId);
  const productOrder = await ProductOrder.findOne({
    where: {
      id: productOrderId,
    },
  });

  if (!productOrder) {
    res.status(404);
    return res.json({
      message: "Product couldn't be found in cart",
      statusCode: 404,
    });
  }

  const order = await Order.findByPk(productOrder.orderId);

  if (user.id === order.userId) {
    await productOrder.destroy();

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
