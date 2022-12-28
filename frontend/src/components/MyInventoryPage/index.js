import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchMyProducts } from "../../store/productReducer";
import InventoryProducts from "../InventoryProducts";

const MyInventoryPage = () => {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state?.products));

  useEffect(() => {
    dispatch(fetchMyProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Manage Inventory</h1>
      <NavLink to="/products/new">
        <button>Add a product</button>
      </NavLink>
      <h3>Image</h3>
      <h3>Product Name</h3>
      <h3>Date Created</h3>
      <h3>Price</h3>
      <div>
        {products?.map((product) => {
          return <InventoryProducts key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default MyInventoryPage;
