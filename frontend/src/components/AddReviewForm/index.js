import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchAddReview } from "../../store/reviewReducer";

const AddReviewForm = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const history = useHistory();

  const [stars, setStars] = useState(0.0);
  const [headline, setHeadline] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let review = {
      stars,
      headline,
      previewImage,
      body,
    };
    setErrors([]);

    const response = await dispatch(fetchAddReview(review, productId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (response) history.push(`/products/${productId}`);
  };

  return (
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
  );
};

export default AddReviewForm;
