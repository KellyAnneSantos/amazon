import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewHelpfuls } from "../../store/helpfulReducer";

const HelpfulCount = ({ review }) => {
  const dispatch = useDispatch();

  const helpfuls = Object.values(useSelector((state) => state.helpfuls));

  useEffect(() => {
    dispatch(fetchReviewHelpfuls(review.id));
  }, [dispatch, review.id]);

  return <p>{helpfuls?.length}</p>;
};

export default HelpfulCount;
