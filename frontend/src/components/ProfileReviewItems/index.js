import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProduct } from "../../store/productReducer";
import { fetchDeleteReview } from "../../store/reviewReducer";

const ProfileReviewItems = ({ review }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products[review.productId]);

  useEffect(() => {
    dispatch(fetchProduct(review.productId));
  }, [dispatch, review.productId]);

  const removeReview = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteReview(review.id));
  };

  return (
    <>
      <img src={review.User?.previewImage} alt="User" />
      <h6>
        {review.User?.firstName} reviewed a product on {review.updatedAt}
      </h6>
      <NavLink to={`/reviews/${review.id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={removeReview}>Delete</button>
      <h5>{review.stars} star(s)</h5>
      <h5>{review.headline}</h5>
      <p>{review.body}</p>
      <img src={product?.previewImage} alt="Product" />
      <h1>{product?.name}</h1>
      <div>{product?.avgStarRating} stars</div>
      <div>{product?.numReviews} ratings</div>
    </>
  );
};

export default ProfileReviewItems;
