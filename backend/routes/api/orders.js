const express = require("express");

const router = express.Router();

const { Order, ProductOrder } = require("../../db/models");

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
