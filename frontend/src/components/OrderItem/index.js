import ProductOrderItem from "../ProductOrderItem";

const OrderItem = ({ order }) => {
  const products = order.Products;

  let sum = 0.0;
  for (const product of products) {
    let productOrders = Object.values(product.ProductOrder);
    for (const productOrder of productOrders) {
      sum += productOrder;
    }
    sum *= product.price;
  }

  return (
    <>
      <p>ORDER PLACED</p>
      <p>{order.updatedAt}</p>
      <p>TOTAL</p>
      <p>{sum}</p>
      <div>
        {products?.map((product) => {
          return <ProductOrderItem key={product?.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default OrderItem;
