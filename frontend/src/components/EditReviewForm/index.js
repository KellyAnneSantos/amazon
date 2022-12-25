import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchEditReview } from "../../store/reviewReducer";

const EditReviewForm = () => {
  const { reviewId } = useParams();
  let review = useSelector((state) => state.reviews[reviewId]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [stars, setStars] = useState(review?.stars);
  const [headline, setHeadline] = useState(review?.headline);
  const [previewImage, setPreviewImage] = useState(review?.previewImage);
  const [body, setBody] = useState(review?.body);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    review = { ...review, stars, headline, previewImage, body };
    setErrors([]);

    const response = await dispatch(fetchEditReview(review)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (response) history.push(`/products/${review.productId}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Stars
          <input
            type="number"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
          />
        </label>
        <label>
          Headline
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            required
          />
        </label>
        <label>
          Preview Image
          <input
            type="text"
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
          />
        </label>
        <label>
          Body
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditReviewForm;
