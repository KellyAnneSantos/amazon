import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProduct } from "../../store/productReducer";

const ProductOrderItem = ({ productOrder }) => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state) => state.products[productOrder.productId]
  );

  useEffect(() => {
    dispatch(fetchProduct(productOrder.productId));
  });

  return (
    <>
      <NavLink to={`/products/${productOrder.productId}`}>
        <img src={product?.previewImage} alt="Product" />
      </NavLink>
      <NavLink to={`/products/${productOrder.productid}`}>
        <p>{product?.name}</p>
      </NavLink>
      <button>Buy it again</button>
      <NavLink to={`/products/${productOrder.productId}/reviews/new`}>
        <button>Write a product review</button>
      </NavLink>
    </>
  );
};

export default ProductOrderItem;
