const express = require("express");

const router = express.Router();

const { Order, ProductOrder } = require("../../db/models");

router.get("/:orderId/productorders", async (req, res) => {
  let { orderId } = req.params;
  orderId = parseInt(orderId);
  // const { user } = req;

  const order = await Order.findByPk(orderId);

  if (!order) {
    res.status(404);
    return res.json({
      message: "Order couldn't be found",
      statusCode: 404,
    });
  }

  // if (user.id === order.userId) {
  const ProductOrders = await ProductOrder.findAll({
    attributes: [
      "id",
      "productId",
      "orderId",
      "quantity",
      "createdAt",
      "updatedAt",
    ],
    where: {
      orderId: order.id,
    },
  });
  // const ProductOrders = await Products.findAll({
  //   attributes: ["id", "previewImage", "name", "prime", "freeReturn", "price"],
  //   include: [
  //     {
  //       model: ProductOrder,
  //       where: {
  //         orderId,
  //       },
  //       attributes: ["quantity"],
  //     },
  //   ],
  // });

  return res.json({
    ProductOrders,
  });
  // }
});

router.get("/:orderId", async (req, res) => {
  let { orderId } = req.params;
  // const { user } = req;
  // productOrderId = parseInt(productOrderId);

  const order = await Order.findByPk(orderId, {
    include: {
      model: ProductOrder,
      attributes: ["id"],
    },
  });

  // if (!productOrder) {
  //   res.status(404);
  //   return res.json({
  //     message: "Product couldn't be found in cart",
  //     statusCode: 404,
  //   });
  // }

  return res.json(order);
});

module.exports = router;
