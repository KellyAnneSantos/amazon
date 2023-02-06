import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchEditReview } from "../../store/reviewReducer";

const EditReviewForm = ({ review }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoaded, setIsLoaded] = useState(false);
  const [stars, setStars] = useState(review?.stars);
  const [headline, setHeadline] = useState(review?.headline);
  const [previewImage, setPreviewImage] = useState(review?.previewImage);
  const [body, setBody] = useState(review?.body);
  const [fake, setFake] = useState(true);
  const [errors, setErrors] = useState([]);

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="review-section-title">Preview Image URL</p>
        <input
          type="text"
          value={previewImage}
          onChange={(e) => setPreviewImage(e.target.value)}
          className="review-headline"
          placeholder="Paste preview image address here."
          required
        />
        <div id="edit-review-preview-img-container">
          <div className="edit-review-add-img-card">
            <img src={previewImage} className="edit-add-review-img" />
          </div>
        </div>
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
    </>
  );
};

export default EditReviewForm;
