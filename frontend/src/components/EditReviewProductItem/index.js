import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/productReducer";

const EditReviewProductItem = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.products[productId]);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  return (
    <div className="review-product-item-container">
      <img src={product?.previewImage} alt="Product" id="review-product-img" />
      <span id="review-product-name">{product?.name}</span>
    </div>
  );
};

export default EditReviewProductItem;
