import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchDeleteReview } from "../../store/reviewReducer";
import "./ReviewItem.css";

const ReviewItem = ({ review }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const images = review.Images;
  const id = review.User?.id;

  let checkedStarArr = [];
  if (review.stars > 0) {
    checkedStarArr = Array.from(Array(Math.floor(review.stars)).keys());
  }

  let starArr = [];
  if (checkedStarArr.length) {
    starArr = Array.from(Array(5 - checkedStarArr.length).keys());
  }

  const deleteReview = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteReview(review.id));
  };

  return (
    <>
      <NavLink to={`/profile/${id}`}>
        <img
          className="user-review-preview-img"
          src={review.User?.previewImage}
          alt="User"
        />
      </NavLink>
      <NavLink to={`/profile/${review.User?.id}`} className="product-fake-name">
        <span>{review.User?.fakeName}</span>
      </NavLink>
      <div>
        {checkedStarArr.length
          ? checkedStarArr.map((star) => {
              return (
                <i class="fa fa-star checked" id="product-orange-star"></i>
              );
            })
          : ""}
        {starArr.length
          ? starArr.map((star) => {
              return (
                <i class="fa-regular fa-star" id="product-orange-star"></i>
              );
            })
          : ""}
        <h5>{review.headline}</h5>
        <h6>Reviewed on {review.updatedAt.substring(0, 10)}</h6>
        <p>{review.body}</p>
      </div>
      <div className="review-mini-img-container">
        <img
          className="product-review-preview-img"
          src={review.previewImage}
          alt="Review"
        />
        <div>
          {images?.map((image) => (
            <img
              className="product-review-preview-img"
              src={image?.mediaUrl}
              key={image?.id}
              alt="Product"
            />
          ))}
        </div>
      </div>
      {user?.id === review.userId && (
        <div>
          <NavLink to={`/reviews/${review.id}/edit`}>
            <button className="product-review-btn">Edit</button>
          </NavLink>
          <button onClick={deleteReview} className="product-review-btn">
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default ReviewItem;
