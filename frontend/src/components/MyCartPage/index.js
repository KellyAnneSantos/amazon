import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../store/orderReducer";
import CartItem from "../CartItem";

const MyCartPage = () => {
  const dispatch = useDispatch();

  const order = Object.values(useSelector((state) => state?.orders))[0];
  const productOrders = order?.ProductOrders;

  const [sum, setSum] = useState(0.0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  useEffect(() => {
    let newSum = 0.0;
    let newQuantity = 0;
    if (productOrders) {
      for (const productOrder of productOrders) {
        newSum += productOrder.quantity * productOrder.Product.price;
        newQuantity += productOrder.quantity;
      }
      setSum(newSum);
      setQuantity(newQuantity);
    }
  }, [productOrders]);

  return (
    <>
      <h1>Shopping Cart</h1>
      <h2>Price</h2>
      <div>
        {productOrders?.map((productOrder) => {
          return (
            <CartItem key={productOrder?.id} productOrder={productOrder} />
          );
        })}
      </div>
      <p>
        Subtotal ({quantity} items): {sum}
      </p>
      <p>
        Subtotal ({quantity} items): {sum}
      </p>
      <button>Proceed to checkout</button>
    </>
  );
};

export default MyCartPage;
