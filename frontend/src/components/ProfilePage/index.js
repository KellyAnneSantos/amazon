import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { fetchUserReviews } from "../../store/reviewReducer";
import { fetchUser } from "../../store/userReducer";
import ProfileReviewItems from "../ProfileReviewItems";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { userId } = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  const profileUser = useSelector((state) => state?.users[userId]) || "";
  const reviews = Object.values(useSelector((state) => state.reviews));

  if (sessionUser?.id === parseInt(userId)) {
    history.push("/my/profile");
  }

  useEffect(() => {
    dispatch(fetchUserReviews(userId));
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (!profileUser?.id) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <img src={profileUser?.previewImage} alt="User" />
      <div>
        {reviews?.map((review) => {
          return <ProfileReviewItems key={review?.id} review={review} />;
        })}
      </div>
    </>
  );
};

export default ProfilePage;
