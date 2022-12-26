import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyReviews } from "../../store/reviewReducer";
import ProfileReviewItems from "../ProfileReviewItems";

const AccountPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const reviews = Object.values(useSelector((state) => state?.reviews));

  useEffect(() => {
    dispatch(fetchMyReviews());
  }, [dispatch]);

  return (
    <>
      <img src={user?.previewImage} alt="User" />
      <div>
        {reviews?.map((review) => {
          return <ProfileReviewItems key={review?.id} review={review} />;
        })}
      </div>
    </>
  );
};

export default AccountPage;
