import ProductOrderItem from "../ProductOrderItem";

const MyCart = ({ orders }) => {
  const productOrders = orders[0]?.ProductOrders;

  let sum = 0.0;
  for (const productOrder of productOrders) {
    sum += productOrder.quantity * productOrder.Product.price;
  }

  return (
    <>
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

export default MyCart;
