// import { useEffect, useState } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  fetchAddReviewHelpful,
  // fetchReviewHelpfuls,
} from "../../store/helpfulReducer";
import { fetchDeleteReview } from "../../store/reviewReducer";
// import HelpfulCount from "../HelpfulCount";
import "./ReviewItem.css";

const ReviewItem = ({ review }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  // const helpfuls = review.Helpfuls;
  const images = review.Images;
  const id = review.User?.id;
  // let fetchedHelpfuls = Object.values(useSelector((state) => state.helpfuls));

  // const [numHelpfuls, setNumHelpfuls] = useState(helpfuls.length);
  const [feedback, setFeedback] = useState(false);

  let checkedStarArr = [];
  if (review.stars > 0) {
    checkedStarArr = Array.from(Array(Math.floor(review.stars)).keys());
  }

  let starArr = [];
  if (checkedStarArr.length) {
    starArr = Array.from(Array(5 - checkedStarArr.length).keys());
  }

  // useEffect(() => {
  //   // setNumHelpfuls(fetchedHelpfuls.length);
  //   dispatch(fetchReviewHelpfuls(review.id));
  // }, [dispatch, review.id]);

  // useEffect(() => {
  //   let count = 0.0;
  //   if (fetchedHelpfuls) {
  //     //go up a level for the equation
  //     for (const helpful of fetchedHelpfuls) {
  //       count++;
  //     }
  //   }
  //   setNumHelpfuls(count);
  // }, [dispatch, fetchedHelpfuls]);

  const handleClick = async (e) => {
    e.preventDefault();

    let helpful = { helpfulStatus: true };

    setFeedback(true);
    await dispatch(fetchAddReviewHelpful(helpful, review.id));
  };

  const deleteReview = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteReview(review.id));
  };

  // useEffect(() => {
  //   dispatch(fetchReviewHelpfuls(review.id));
  // }, [dispatch, review.id]);

  return (
    <div className="product-review-container">
      <div className="product-review-top-line">
        <NavLink to={`/profile/${id}`}>
          <img
            className="user-review-preview-img"
            src={review.User?.previewImage}
            alt="User"
          />
        </NavLink>
        <NavLink
          to={`/profile/${review.User?.id}`}
          className="product-fake-name"
        >
          <span className="product-fake-name">{review.User?.fakeName}</span>
        </NavLink>
      </div>
      <div>
        <div className="product-review-star-headline">
          {checkedStarArr.length
            ? checkedStarArr.map((star, idx) => {
                return (
                  <i
                    className="fa fa-star checked"
                    id="product-orange-star"
                    key={idx}
                  ></i>
                );
              })
            : ""}
          {starArr.length
            ? starArr.map((star, idx) => {
                return (
                  <i
                    className="fa-regular fa-star"
                    id="product-orange-star"
                    key={idx}
                  ></i>
                );
              })
            : ""}
          <h5 className="product-review-headline">{review.headline}</h5>
        </div>
        <h6 className="product-review-date">
          Reviewed on {review.updatedAt.substring(0, 10)}
        </h6>
        <p className="product-review-body">{review.body}</p>
      </div>
      <div id="review-images-container">
        {images?.map((image) => (
          <img
            className="reviews-w-images"
            src={image?.mediaUrl}
            key={image?.id}
            alt="Product"
          />
        ))}
      </div>
      {/* {numHelpfuls ? (
        <p className="product-review-helpfuls">
          {helpfuls.length} people found this helpful
        </p>
      ) : (
        ""
      )} */}
      {/* <HelpfulCount review={review} /> */}
      {feedback && (
        <>
          <i class="fa-solid fa-circle-check"></i>
          <span className="feedback"> Thank you for your feedback.</span>
        </>
      )}
      {!feedback && user?.id !== review.userId && (
        <button id="review-helpful-btn" onClick={handleClick}>
          Helpful
        </button>
      )}
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
    </div>
  );
};

export default ReviewItem;
