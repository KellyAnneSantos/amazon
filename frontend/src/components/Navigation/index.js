import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import SearchBar from "../SearchBar";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <NavLink to="/my/cart">Shopping Cart</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/register">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul id="nav-bar">
      <li id="nav-bar-links">
        <NavLink exact to="/">
          <img
            src="../../images/NicePng_amazon-logo-png_167642.png"
            id="nav-bar-logo"
          />
        </NavLink>
        <SearchBar />
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
