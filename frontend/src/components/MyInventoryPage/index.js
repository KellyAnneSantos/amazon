import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchMyProducts } from "../../store/productReducer";
import InventoryProducts from "../InventoryProducts";
import "./MyInventoryPage.css";

const MyInventoryPage = () => {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state?.products));

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchMyProducts()).then(setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <>
          <div id="inventory-p-header">
            <span id="inventory-title">Manage Inventory</span>
            <NavLink to="/products/new">
              <button id="inventory-add-btn">Add a product</button>
            </NavLink>
          </div>
          <table id="inventory-table-top">
            <tbody>
              <tr id="inventory-headers-section">
                <th id="inventory-header-image">Image</th>
                <th id="inventory-header-name">Product Name</th>
                <th id="inventory-header-date">Date Created</th>
                <th id="inventory-header-price">Price</th>
                <th id="inventory-header-none">{""}</th>
              </tr>
            </tbody>
          </table>
          <table id="inventory-table-bottom">
            <tbody>
              {products?.map((product) => {
                return <InventoryProducts key={product.id} product={product} />;
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default MyInventoryPage;
