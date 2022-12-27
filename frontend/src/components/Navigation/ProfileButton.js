import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Your Lists</li>
          <li>
            <NavLink to="/lists/new">Create a List</NavLink>
          </li>
          <li>Your Account</li>
          <li>
            <NavLink to="/products/new">Add a Product</NavLink>
          </li>
          <li>
            <NavLink to="/inventory">Manage Inventory</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/subscriptions">Subscribe & Save Items</NavLink>
          </li>
          <li>
            <NavLink to="/prime">Prime Membership</NavLink>
          </li>
          <li>
            <NavLink to="/sell">Start a Selling Account</NavLink>
          </li>
          <li>
            <button onClick={logout}>Sign Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
