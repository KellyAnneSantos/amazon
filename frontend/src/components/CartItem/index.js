import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProduct } from "../../store/productReducer";

const CartItem = ({ productOrder }) => {
  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state.products[productOrder.productId]
  );

  useEffect(() => {
    dispatch(fetchProduct(productOrder.productId));
  }, []);

  return (
    <>
      <NavLink to={`/products/${productOrder.productId}`}>
        <img src={product?.previewImage} alt="Product" />
      </NavLink>
      <span>{product?.price}</span>
      <NavLink to={`/products/${productOrder.productid}`}>
        <p>{product?.name}</p>
      </NavLink>
      {product?.prime && <div>prime</div>}
      {product?.freeReturn && <div>FREE Returns</div>}
      <span>{productOrder.quantity}</span>
      <button>Delete</button>
    </>
  );
};

export default CartItem;
