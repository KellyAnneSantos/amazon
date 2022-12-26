import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchDeleteReview } from "../../store/reviewReducer";

const ReviewItem = ({ review }) => {
  const dispatch = useDispatch();

  const images = review.Images;
  const id = review.User?.id;

  const deleteReview = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteReview(review.id));
  };

  return (
    <>
      <NavLink to={`/profile/${id}`}>
        <img src={review.User?.previewImage} alt="User" />
      </NavLink>
      <NavLink to={`/profile/${review.User?.id}`}>
        <h6>{review.User?.firstName}</h6>
      </NavLink>
      <h5>{review.stars} star(s)</h5>
      <h5>{review.headline}</h5>
      <h6>Reviewed on {review.updatedAt}</h6>
      <p>{review.body}</p>
      <div>
        {images?.map((image) => (
          <img src={image?.mediaUrl} key={image?.id} alt="Product" />
        ))}
      </div>
      <NavLink to={`/reviews/${review.id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={deleteReview}>Delete</button>
    </>
  );
};

export default ReviewItem;
