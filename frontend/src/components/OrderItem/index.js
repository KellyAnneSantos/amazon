import { useSelector } from "react-redux";
import ProductOrderItem from "../ProductOrderItem";
import "./OrderItem.css";

const OrderItem = ({ order }) => {
  const productOrders = order.ProductOrders;

  const user = useSelector((state) => state.session.user);

  let sum = 0.0;
  for (const productOrder of productOrders) {
    sum += productOrder.quantity * productOrder.Product.price;
  }

  return (
    <div className="individual-orders-container">
      <div className="order-top-container">
        <div className="order-top-left-container">
          <div>
            <p className="order-headers">ORDER PLACED</p>
            <p className="order-footers">{order.updatedAt.substring(0, 10)}</p>
          </div>
          <div className="order-top-table">
            <p className="order-headers">TOTAL</p>
            <p className="order-footers">${sum.toFixed(2)}</p>
          </div>
          <div className="order-top-table">
            <p className="order-headers">SHIP TO</p>
            <p className="order-ship-name">
              {user?.firstName} {user?.lastName}
            </p>
          </div>
        </div>
        <p className="order-headers">ORDER # {order?.id}</p>
      </div>
      <div className="order-bottom-border">
        {productOrders?.map((productOrder) => {
          return (
            <ProductOrderItem
              key={productOrder?.id}
              productOrder={productOrder}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OrderItem;
