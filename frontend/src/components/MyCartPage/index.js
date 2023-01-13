import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
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

  const [sum, setSum] = useState(0.0);
  const [number, setNumber] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  let [arr, setArr] = useState(
    productOrders?.map((productOrder) => productOrder?.quantity).join("")
  );
  let [newArr, setNewArr] = useState([]);

  useEffect(() => {
    const getTotal = async () => {
      let newSum = 0.0;
      let newQuantity = 0;
      if (productOrders) {
        for await (const productOrder of productOrders) {
          newSum +=
            parseInt(productOrder?.quantity) *
            parseInt(productOrder?.Product?.price);
          newQuantity += parseInt(productOrder?.quantity);
        }
        setSum(newSum);
        setNumber(newQuantity);
      }
    };
    getTotal();
    setArr(
      productOrders?.map((productOrder) => productOrder?.quantity)?.join("")
    );
    dispatch(fetchLoadCart()).then(() => setIsLoaded(true));
  }, [productOrders?.map((productOrder) => productOrder?.quantity)?.join("")]);

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
                {
                  (newArr = productOrders?.map((productOrder) => {
                    return (
                      <>
                        <CartItem
                          key={productOrder?.id}
                          productOrder={productOrder}
                        />
                        <hr className="cart-hr" />
                      </>
                    );
                  }))
                }
              </div>
              <div id="cart-product-subtotal-section">
                <span id="cart-product-subtotal">
                  Subtotal ({number} items):{" "}
                </span>
                <span id="cart-product-subtotal-price">${sum.toFixed(2)}</span>
              </div>
            </div>
            <div id="cart-check-out-section">
              <div>
                <span id="cart-checkout-subtotal">
                  Subtotal ({number} items):{" "}
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
