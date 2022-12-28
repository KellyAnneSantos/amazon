import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "../../store/productReducer";
import { fetchReviews } from "../../store/reviewReducer";
import { fetchProductImages } from "../../store/imageReducer";
import ReviewItem from "../ReviewItem";
import ReviewImages from "../ReviewImages";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state?.products[productId]);
  let reviews = useSelector((state) => state?.reviews) || "";
  let images = useSelector((state) => state?.images) || "";
  const descriptions = product?.Descriptions;

  useEffect(() => {
    dispatch(fetchProduct(productId));
    dispatch(fetchReviews(productId));
    dispatch(fetchProductImages(productId));
  }, [dispatch, productId]);

  return (
    <>
      <span>{product?.department}</span>
      <img src={product?.previewImage} alt="Product" />
      <div>
        {Object.values(images).map((image) => {
          return <img src={image?.mediaUrl} key={image?.id} alt="Product" />;
        })}
      </div>
      <h1>{product?.name}</h1>
      <h2>{product?.User.merchantName}</h2>
      <div>{product?.avgStarRating} stars</div>
      <div>{product?.numReviews} ratings</div>
      <div>{product?.price}</div>
      {product?.prime && <div>prime</div>}
      {product?.freeReturn && <div>FREE Returns</div>}
      <h3>About this item</h3>
      <ul>
        <li>{product?.description}</li>
        {descriptions?.map((description) => (
          <li key={description.id}>{description.bulletPoint}</li>
        ))}
      </ul>
      <h2>Customer reviews</h2>
      <h3>{product?.avgStarRating} out of 5</h3>
      <h4>{product?.numReviews} global ratings</h4>
      <h4>Review this product</h4>
      <p>Share your thoughts with other customers</p>
      <NavLink to={`/products/${product?.id}/reviews/new`}>
        <button>Write a customer review</button>
      </NavLink>
      <h4>Reviews with images</h4>
      <div>
        {Object.values(reviews).map((review) => {
          return <ReviewImages key={review?.id} review={review} />;
        })}
      </div>
      <h4>Most recent reviews</h4>
      <div>
        {Object.values(reviews).map((review) => {
          return <ReviewItem key={review?.id} review={review} />;
        })}
      </div>
    </>
  );
};

export default ProductShow;
