import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./NavigationDropdown.css";

const NavigationDropdown = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div id="dropdown-container">
      <button className="account-drop">
        <p id="greeting">Hello, {user?.firstName} </p>
        <p id="account-btn-row-2">
          Accounts & Lists{" "}
          <i
            className="fa-solid fa-caret-down"
            style={{ color: "lightgray" }}
          ></i>
        </p>
      </button>
      <div className="profile-dropdown">
        {/* <li>Your Lists</li>
        <li className="remove-text-dec">
          <NavLink to="/lists/new" className="remove-text-dec">
            Create a List
          </NavLink>
        </li> */}
        {/* <li>Your Account</li> */}
        {/* {user?.merchant && ( */}
        <NavLink to="/products/new" className="remove-text-dec">
          <li className="account-drop-options"> Add a Product</li>
        </NavLink>
        {/* )} */}
        {/* {user?.merchant && ( */}
        <NavLink to="/inventory" className="remove-text-dec">
          <li className="account-drop-options">Manage Inventory</li>
        </NavLink>
        {/* )} */}
        <NavLink to="/my/orders" className="remove-text-dec">
          <li className="account-drop-options">Orders</li>
        </NavLink>
        {/* {!user?.prime && <li className="account-drop-options">Join Prime</li>} */}
        {/* {!user?.merchant && (
          <li className="account-drop-options">Start a Selling Account</li>
        )} */}
        <li className="account-drop-options" onClick={logout}>
          Sign Out
        </li>
      </div>
    </div>
  );
};

export default NavigationDropdown;
