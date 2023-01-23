import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { fetchReviewImages } from "../../store/imageReducer";
import { fetchEditReview } from "../../store/reviewReducer";
import AddReviewImage from "../AddReviewImage";
import EditReviewProductItem from "../EditReviewProductItem";
import "./EditReviewForm.css";

const EditReviewForm = () => {
  const { reviewId } = useParams();

  const user = useSelector((state) => state.session.user);
  let review = useSelector((state) => state.reviews[reviewId]);
  const productId = review?.productId;

  const dispatch = useDispatch();
  const history = useHistory();

  const [stars, setStars] = useState(review?.stars);
  const [headline, setHeadline] = useState(review?.headline);
  const [previewImage, setPreviewImage] = useState(review?.previewImage);
  const [body, setBody] = useState(review?.body);
  const [fake, setFake] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(fetchReviewImages(reviewId));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    review = { ...review, stars, headline, previewImage, body };
    setErrors([]);

    const response = await dispatch(fetchEditReview(review, review?.id)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (response) history.push(`/products/${review?.productId}`);
  };

  if (!review?.id) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {/* {fake && (
        <div className="review-fake-name-form">
          <img src={user?.previewImage} className="review-user-img" />
          <span className="review-fake-name">{user?.fakeName}</span>
          <button className="review-fake-edit" onClick={() => setFake(!fake)}>
            Edit
          </button>
        </div>
      )}
      {!fake && (
        <div className="review-fake-name-form">
          <img src={user?.previewImage} className="review-user-img" />
          <span className="review-fake-name">{user?.fakeName}</span>
          <button onClick={() => setFake(!fake)}>Cancel</button>
        </div>
      )} */}
      <div id="review-form">
        <h1 className="review-form-title">Create Review</h1>
        <EditReviewProductItem productId={productId} />
        <hr className="review-lightgray-hr" />
        <p className="review-section-title">Add a photo</p>
        <p className="review-photo-p">
          Shoppers find images and videos more helpful than text alone.
        </p>
        <AddReviewImage reviewId={reviewId} />
        <form onSubmit={handleSubmit}>
          <label>
            Preview Image URL
            <input
              type="text"
              value={previewImage}
              onChange={(e) => setPreviewImage(e.target.value)}
              className="review-headline"
              placeholder="Paste image address here."
              required
            />
          </label>
          <img src={review?.previewImage} id="review-preview-img" />
          <hr className="review-lightgray-hr" />
          <p className="review-section-title">Overall rating</p>
          <div className="review-stars">
            <i
              className={
                stars >= 1
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(1)}
            ></i>
            <i
              className={
                stars >= 2
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(2)}
            ></i>
            <i
              className={
                stars >= 3
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(3)}
            ></i>
            <i
              className={
                stars >= 4
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(4)}
            ></i>
            <i
              className={
                stars >= 5
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(5)}
            ></i>
          </div>
          <hr className="review-lightgray-hr" />
          <p className="review-section-title">Add a headline</p>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder="What's most important to know?"
            required
            className="review-headline"
          />
          <hr className="review-lightgray-hr" />
          <p className="review-section-title">Add a written review</p>
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What did you like or dislike? What did you use this product for?"
            required
            className="review-text-area"
          />
          <hr className="review-lightgray-hr" />
          <button type="submit" className="review-submit-btn">
            Submit
          </button>
        </form>
        <ul className="error-ul">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EditReviewForm;
