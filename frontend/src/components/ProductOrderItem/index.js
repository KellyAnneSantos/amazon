import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAddProductOrder } from "../../store/productOrderReducer";
import { fetchProduct } from "../../store/productReducer";
import "./ProductOrderItem.css";

const ProductOrderItem = ({ productOrder }) => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state) => state.products[productOrder.productId]
  );

  useEffect(() => {
    dispatch(fetchProduct(productOrder.productId));
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    let newProductOrder = { productId: productOrder?.productId, quantity: 1 };

    await dispatch(fetchAddProductOrder(newProductOrder));
  };

  return (
    <div className="po-bottom">
      <div className="po-left">
        <div>
          <NavLink to={`/products/${productOrder.productId}`}>
            <img
              src={product?.previewImage}
              alt="Product"
              className="po-image"
            />
          </NavLink>
          {productOrder?.quantity > 1 && <span>{productOrder.quantity}</span>}
        </div>
        <div>
          <NavLink
            to={`/products/${productOrder.productid}`}
            className="po-name"
          >
            <p className="po-name">{product?.name}</p>
          </NavLink>
          <button className="order-buy-btn" onClick={handleClick}>
            <i className="fa-solid fa-bag-shopping fa-sm"></i>
            <span>Buy it again</span>
          </button>
        </div>
      </div>
      <NavLink to={`/products/${productOrder.productId}/reviews/new`}>
        <button className="order-review-btn">Write a product review</button>
      </NavLink>
    </div>
  );
};

export default ProductOrderItem;
