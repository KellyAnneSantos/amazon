const express = require("express");

const router = express.Router();

const { Order, Product, ProductOrder } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const validateProductOrder = [
  check("quantity")
    // .exists({ checkFalsy: true })
    .isInt({ min: 1, max: 30 })
    .withMessage("Quantity is invalid"),
  handleValidationErrors,
];

router.get("/:productOrderId", async (req, res) => {
  let { productOrderId } = req.params;
  productOrderId = parseInt(productOrderId);

  // const productOrder = await ProductOrder.findByPk(productOrderId);
  // returns where productorder.productid = productorderid

  const productOrder = await ProductOrder.findOne({
    attributes: [
      "id",
      "productId",
      "orderId",
      "quantity",
      "createdAt",
      "updatedAt",
    ],
    where: {
      id: productOrderId,
    },
    include: [
      {
        model: Product,
      },
    ],
  });

  return res.json(productOrder);
});

router.put(
  "/:productOrderId",
  requireAuth,
  validateProductOrder,
  async (req, res) => {
    let { productOrderId } = req.params;
    let { quantity } = req.body;
    const { user } = req;

    const productOrder = await ProductOrder.findOne({
      // attributes: [
      //   "id",
      //   "productId",
      //   "orderId",
      //   "quantity",
      //   "createdAt",
      //   "updatedAt",
      // ],
      where: {
        id: productOrderId,
      },
      // include: [
      //   {
      //     model: Product,
      //   },
      // ],
    });

    if (!productOrder) {
      res.status(404);
      return res.json({
        message: "Product order couldn't be found",
        statusCode: 404,
      });
    }

    const order = await Order.findOne({
      where: {
        id: productOrder.orderId,
      },
    });

    if (order.status !== "cart") {
      res.status(403);
      return res.json({
        message: "Forbidden",
        statusCode: 403,
      });
    }

    if (user.id !== order.userId) {
      res.status(403);
      return res.json({
        message: "Current user must be the shopper to edit the quantity",
        statusCode: 403,
      });
    }

    productOrder.update({
      quantity,
    });

    const updatedProductOrder = await ProductOrder.findOne({
      where: {
        id: productOrderId,
      },
      attributes: [
        "id",
        "productId",
        "orderId",
        "quantity",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: Product,
        },
      ],
    });

    return res.json(updatedProductOrder);
  }
);

router.delete("/:productOrderId", requireAuth, async (req, res) => {
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
