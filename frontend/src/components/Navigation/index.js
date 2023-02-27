import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css";
import SearchBar from "../SearchBar";
import NavigationDropdown from "../NavigationDropdown";
import DepartmentItem from "../DepartmentItem";
import { fetchLoadCart } from "../../store/productOrderReducer";

// function Navigation({ isLoaded }) {
function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const productOrders = Object.values(
    useSelector((state) => state?.productOrders)
  );

  const departments = [
    "Baby",
    "Beauty",
    "Books",
    "Cellular",
    "Clothing",
    "Devices",
    "Garden",
    "Grocery",
    "Health",
    "Home",
    "Sports",
    "Toys",
  ];

  const [sum, setSum] = useState(0);
  const [number, setNumber] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  let [arr, setArr] = useState(
    productOrders?.map((productOrder) => productOrder?.quantity).join("")
  );
  let [newArr, setNewArr] = useState([]);

  useEffect(() => {
    const getTotal = async () => {
      let newSum = 0;
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

  return (
    isLoaded && (
      <>
        <nav id="nav-bar">
          <NavLink exact to="/">
            <img
              src="../../images/NicePng_amazon-logo-png_167642.png"
              id="nav-bar-logo"
            />
          </NavLink>
          <SearchBar />
          <NavigationDropdown />
          <NavLink to="/my/orders" className="remove-text-dec">
            <p id="nav-bar-orders">Orders</p>
          </NavLink>
          <NavLink to="/my/cart" className="remove-text-dec">
            <p className="nav-bar-cart">
              <i className="fa-solid fa-cart-shopping fa-2xl">
                <div className="nav-bar-cart count">{number}</div>
              </i>{" "}
              Cart
            </p>
          </NavLink>
        </nav>
        <nav id="second-nav-bar">
          {departments.map((department) => (
            <DepartmentItem key={department} department={department} />
          ))}
        </nav>
      </>
    )
  );
}

export default Navigation;
