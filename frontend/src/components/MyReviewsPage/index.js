import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserReviews } from "../../store/reviewReducer";
import ProfileReviewItems from "../ProfileReviewItems";

const MyReviewsPage = ({ user }) => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchUserReviews(user.id));
  }, [dispatch]);

  return (
    <div>
      {Object.values(reviews).map((review) => {
        return <ProfileReviewItems key={review?.id} review={review} />;
      })}
    </div>
  );
};

export default MyReviewsPage;
