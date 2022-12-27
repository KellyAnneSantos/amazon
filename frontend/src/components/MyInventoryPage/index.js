import { NavLink } from "react-router-dom";

const MyInventoryPage = () => {
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
      <h3>Image</h3>
    </>
  );
};

export default MyInventoryPage;
