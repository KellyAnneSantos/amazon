import ProductOrderItem from "../ProductOrderItem";

const OrderItem = ({ order }) => {
  const productOrders = order.ProductOrders;

  let sum = 0.0;
  for (const productOrder of productOrders) {
    sum += productOrder.quantity * productOrder.Product.price;
  }

  return (
    <>
      <p>ORDER PLACED</p>
      <p>{order.updatedAt}</p>
      <p>TOTAL</p>
      <p>{sum}</p>
      <div>
        {productOrders?.map((productOrder) => {
          return (
            <ProductOrderItem
              key={productOrder?.id}
              productOrder={productOrder}
            />
          );
        })}
      </div>
    </>
  );
};

export default OrderItem;
