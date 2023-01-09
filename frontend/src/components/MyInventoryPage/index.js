import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchMyProducts } from "../../store/productReducer";
import InventoryProducts from "../InventoryProducts";
import "./MyInventoryPage.css";

const MyInventoryPage = () => {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state?.products));

  useEffect(() => {
    dispatch(fetchMyProducts());
  }, [dispatch]);

  return (
    <>
      <div id="inventory-p-header">
        <span id="inventory-title">Manage Inventory</span>
        <NavLink to="/products/new">
          <button id="inventory-add-btn">Add a product</button>
        </NavLink>
      </div>
      <table id="inventory-table-top">
        <tr id="inventory-headers-section">
          <th id="inventory-header-image">Image</th>
          <th id="inventory-header-name">Product Name</th>
          <th id="inventory-header-date">Date Created</th>
          <th id="inventory-header-price">Price</th>
          <th id="inventory-header-none">{""}</th>
        </tr>
      </table>
      <table id="inventory-table-bottom">
        <>
          {products?.map((product) => {
            return <InventoryProducts key={product.id} product={product} />;
          })}
        </>
      </table>
    </>
  );
};

export default MyInventoryPage;
