import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/orderReducer";
import OrderItem from "../OrderItem";
import "./MyOrdersPage.css";

const MyOrdersPage = () => {
  const dispatch = useDispatch();

  const orders = Object.values(useSelector((state) => state.orders)).reverse();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchOrders()).then(() => setIsLoaded(true));
  }, []);

  return (
    isLoaded && (
      <>
        <div id="your-orders-page">
          <span id="orders-account-category">Your Account </span>
          <span id="orders-carat">{"> "}</span>
          <span id="orders-category">Your Orders</span>
          <h1 id="orders-title">Your Orders</h1>
          <h2 id="orders-tab">Orders</h2>
          <hr id="orders-short-hr" />
          <hr id="orders-long-hr" />
          <span id="orders-count">{orders?.length} orders placed</span>
          <div>
            {orders?.map((order) => {
              return <OrderItem key={order?.id} order={order} />;
            })}
          </div>
        </div>
      </>
    )
  );
};

export default MyOrdersPage;
