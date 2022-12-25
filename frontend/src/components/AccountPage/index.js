import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyReviews } from "../../store/reviewReducer";
import MyReviewItems from "../MyReviewItems";

const AccountPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state?.reviews);

  useEffect(() => {
    dispatch(fetchMyReviews());
  }, [dispatch]);

  return (
    <>
      <img src={user?.previewImage} alt="User" />
      <div>
        {Object.values(reviews).map((review) => {
          return <MyReviewItems key={review?.id} review={review} />;
        })}
      </div>
    </>
  );
};

export default AccountPage;
