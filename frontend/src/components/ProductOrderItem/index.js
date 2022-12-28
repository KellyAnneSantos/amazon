import { NavLink } from "react-router-dom";

const ProductOrderItem = ({ product }) => {
  return (
    <>
      <NavLink to={`/products/${product.id}`}>
        <img src={product.previewImage} alt="Product" />
      </NavLink>
      <NavLink to={`/products/${product.id}`}>
        <p>{product.name}</p>
      </NavLink>
      <button>Buy it again</button>
      <NavLink to={`/products/${product.id}/reviews/new`}>
        <button>Write a product review</button>
      </NavLink>
    </>
  );
};

export default ProductOrderItem;
