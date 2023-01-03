import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../store/orderReducer";
import MyCart from "../MyCart";

const MyCartPage = () => {
  const dispatch = useDispatch();

  const orders = Object.values(useSelector((state) => state.orders));

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <>
      <p>{orders[0]?.updatedAt}</p>
      {/* <MyCart orders={orders} /> */}
    </>
  );
};

export default MyCartPage;
