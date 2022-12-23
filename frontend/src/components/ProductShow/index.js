import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "../../store/productReducer";
import { fetchReviews } from "../../store/reviewReducer";
import { fetchImages } from "../../store/imageReducer";
import ReviewItem from "../ReviewItem";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state?.products[productId]);
  let reviews = useSelector((state) => state?.reviews?.review) || "";
  let images = useSelector((state) => state?.images?.image) || "";
  const descriptions = product?.Descriptions;

  useEffect(() => {
    dispatch(fetchProduct(productId));
    dispatch(fetchReviews(productId));
    dispatch(fetchImages(productId));
  }, [dispatch, productId]);

  return (
    <>
      <span>{product?.department}</span>
      <img src={product?.previewImage} alt="Product" />
      <div>
        {Object.values(images).map((image) => {
          return <img src={image?.mediaUrl} key={image?.id} />;
        })}
      </div>
      <h1>{product?.name}</h1>
      <h2>{product?.User.merchantName}</h2>
      <div>{product?.price}</div>
      {product?.prime && <div>prime</div>}
      {product?.freeReturn && <div>FREE Returns</div>}
      <h3>About this item</h3>
      <ul>
        <li>{product?.description}</li>
        {descriptions.map((description) => (
          <li>{description.bulletPoint}</li>
        ))}
      </ul>
      <h2>Most recent reviews</h2>
      <div>
        {Object.values(reviews).map((review) => {
          return <ReviewItem key={review?.id} review={review} />;
        })}
      </div>
    </>
  );
};

export default ProductShow;
