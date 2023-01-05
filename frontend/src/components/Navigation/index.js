import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";
import SearchBar from "../SearchBar";
import NavigationDropdown from "../NavigationDropdown";
import DepartmentItem from "../DepartmentItem";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

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

  return (
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
          <p id="nav-bar-cart">
            <i className="fa-solid fa-cart-shopping fa-2xl"></i> Cart
          </p>
        </NavLink>
      </nav>
      <nav id="second-nav-bar">
        {departments.map((department) => (
          <DepartmentItem key={department} department={department} />
        ))}
      </nav>
    </>
  );
}

export default Navigation;
