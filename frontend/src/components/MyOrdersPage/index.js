import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/orderReducer";
import OrderItem from "../OrderItem";

const MyOrdersPage = () => {
  const dispatch = useDispatch();

  const orders = Object.values(useSelector((state) => state.orders));

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <>
      <div>
        {orders?.map((order) => {
          return <OrderItem key={order?.id} order={order} />;
        })}
      </div>
    </>
  );
};

export default MyOrdersPage;
