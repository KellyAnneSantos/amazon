import { NavLink } from "react-router-dom";
import ProfileProductItem from "../ProfileProductItem";

const ProfileReviewItems = ({ review }) => {
  return (
    <>
      <img src={review.User?.previewImage} alt="User" />
      <h6>
        {review.User?.firstName} reviewed a product on {review.updatedAt}
      </h6>
      <NavLink to={`/reviews/${review.id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <h5>{review.stars} star(s)</h5>
      <h5>{review.headline}</h5>
      <p>{review.body}</p>
      <ProfileProductItem productId={review.productId} />
    </>
  );
};

export default ProfileReviewItems;
