import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoadCart } from "../../store/productOrderReducer";
import CartItem from "../CartItem";
import "./MyCartPage.css";

const MyCartPage = () => {
  const dispatch = useDispatch();

  // const order = Object.values(useSelector((state) => state?.orders))[0];
  const productOrders = Object.values(
    useSelector((state) => state?.productOrders)
  );

  const [sum, setSum] = useState(0.0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(fetchLoadCart());
  }, []);

  useEffect(() => {
    let newSum = 0.0;
    let newQuantity = 0;
    if (productOrders) {
      for (const productOrder of productOrders) {
        newSum += productOrder?.quantity * productOrder?.Product?.price;
        newQuantity += productOrder?.quantity;
      }
      setSum(newSum);
      setQuantity(newQuantity);
    }
  }, [productOrders]);

  return (
    <div id="cart-page">
      <div id="center-product-cart">
        <div id="product-orders-container">
          <h1 id="cart-title">Shopping Cart</h1>
          <h2 id="position-price">Price</h2>
          <hr className="cart-hr" />
          <div>
            {productOrders?.map((productOrder) => {
              return (
                <>
                  <CartItem
                    key={productOrder?.id}
                    productOrder={productOrder}
                  />
                  <hr className="cart-hr" />
                </>
              );
            })}
          </div>
          <div id="cart-product-subtotal-section">
            <span id="cart-product-subtotal">
              Subtotal ({quantity} items):{" "}
            </span>
            <span id="cart-product-subtotal-price">${sum}</span>
          </div>
        </div>
        <div id="cart-check-out-section">
          <div>
            <span id="cart-checkout-subtotal">
              Subtotal ({quantity} items):{" "}
            </span>
            <span id="cart-checkout-subtotal-price">${sum}</span>
          </div>
          <button id="cart-checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
