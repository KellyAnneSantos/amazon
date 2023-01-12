import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchPay } from "../../store/orderReducer";
import { fetchLoadCart } from "../../store/productOrderReducer";
import CartItem from "../CartItem";
import "./MyCartPage.css";

const MyCartPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const productOrders = Object.values(
    useSelector((state) => state?.productOrders)
  );

  let [sum, setSum] = useState(0.0);
  let [quantity, setQuantity] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchLoadCart()).then(() => setIsLoaded(true));
  }, [dispatch]);

  let newSum = 0.0;
  let newQuantity = 0;

  useEffect(() => {
    if (productOrders) {
      for (const productOrder of productOrders) {
        newSum += productOrder?.quantity * productOrder?.Product?.price;
        newQuantity += productOrder?.quantity;
      }
      setSum(newSum);
      setQuantity(newQuantity);
    }
  }, [productOrders, sum, quantity, newSum, newQuantity]);

  const handleClick = async (e) => {
    e.preventDefault();

    await dispatch(fetchPay());
    history.push("/my/orders");
  };

  return (
    <>
      {isLoaded && (
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
                <span id="cart-product-subtotal-price">${sum.toFixed(2)}</span>
              </div>
            </div>
            <div id="cart-check-out-section">
              <div>
                <span id="cart-checkout-subtotal">
                  Subtotal ({quantity} items):{" "}
                </span>
                <span id="cart-checkout-subtotal-price">${sum.toFixed(2)}</span>
              </div>
              <button id="cart-checkout-btn" onClick={handleClick}>
                Place your order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCartPage;
