import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  fetchEditProductOrder,
  fetchDeleteProductOrder,
} from "../../store/productOrderReducer";
import { fetchProduct } from "../../store/productReducer";
import "./CartItem.css";

const CartItem = ({ productOrder }) => {
  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state.products[productOrder?.productId]
  );

  const [quantity, setQuantity] = useState(productOrder?.quantity);

  let arr = Array.from(Array(31).keys());
  arr.shift();

  const handleClick = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteProductOrder(productOrder?.id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    productOrder = { ...productOrder, quantity };

    await dispatch(fetchEditProductOrder(productOrder, productOrder?.id));
  };

  useEffect(() => {
    // setQuantity(productOrder?.quantity);
    dispatch(fetchProduct(productOrder?.productId));
  }, [dispatch, productOrder?.productId, productOrder?.quantity]);

  return (
    <div className="cart-product-order">
      <div className="cart-form-w-pic">
        <NavLink to={`/products/${product?.id}`}>
          <img src={product?.previewImage} alt="Product" className="cart-img" />
        </NavLink>
        <div className="cart-form">
          <NavLink
            to={`/products/${product?.id}`}
            className="cart-product-name"
          >
            <p className="cart-product-name">{product?.name}</p>
          </NavLink>
          {product?.prime && (
            <img
              id="cart-form-prime-logo"
              src="../../images/kisspng-amazon-com-amazon-prime-amazon-video-retail-prime-amazon-prime-5b376c3c2a9899.6153089515303588441745.png"
            />
          )}
          {product?.freeReturn && <p className="cart-free">FREE Returns</p>}
          <div className="cart-action">
            <form className="cart-edit-form">
              <span id="qty-label">Qty: </span>
              <select
                name="type"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                id="qty-form"
              >
                {arr?.map((ele) => {
                  return (
                    <option key={ele} value={ele}>
                      {ele}
                    </option>
                  );
                })}
              </select>
              <button
                type="button"
                className="cart-update-btn"
                onMouseDown={handleSubmit}
              >
                Update
              </button>
            </form>
            <span className="cart-vl">|</span>
            {/* <div className="cart-vl"> */}
            <span onClick={handleClick} className="cart-delete-link">
              Delete
            </span>
            {/* </div> */}
          </div>
        </div>
      </div>
      <span className="cart-price">${product?.price}</span>
    </div>
  );
};

export default CartItem;
