import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "../../store/productReducer";
import { fetchReviews } from "../../store/reviewReducer";
import ReviewItem from "../ReviewItem";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);
  const reviews = useSelector((state) => state?.reviews?.review) || "";

  useEffect(() => {
    dispatch(fetchProduct(productId));
    dispatch(fetchReviews(productId));
  }, [dispatch, productId]);

  return (
    <>
      <span>{product?.department}</span>
      <img src={product?.previewImage} alt="Product Picture" />
      <h1>{product?.name}</h1>
      <h2>{product?.User.merchantName}</h2>
      <div>{product?.price}</div>
      {product?.freeReturn && <div>FREE Returns</div>}
      <h3>About this item</h3>
      <ul>
        <li>{product?.description}</li>
      </ul>
      <h2>Most recent reviews</h2>
      {/* <div>
        {reviews?.map((review) => {
          return <ReviewItem key={review?.id} review={review} />;
        })}
      </div> */}
    </>
  );
};

export default ProductShow;
