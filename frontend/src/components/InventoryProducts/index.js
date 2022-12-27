import { NavLink } from "react-router-dom";

const InventoryProducts = ({ product }) => {
  return (
    <>
      <img src={product.previewImage} alt="Product" />
      <NavLink to={`/products/${product?.id}`}>
        <span>{product.name}</span>
      </NavLink>
      <span>{product.createdAt}</span>
      <span>{product.price}</span>
      <NavLink to={`/products/${product?.id}/edit`}>
        <button>Edit</button>
      </NavLink>
    </>
  );
};

export default InventoryProducts;
