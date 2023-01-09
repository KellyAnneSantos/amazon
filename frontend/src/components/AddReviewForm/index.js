import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchAddReview } from "../../store/reviewReducer";
import ReviewProductItem from "../ReviewProductItem";
import "./AddReviewForm.css";

const AddReviewForm = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const history = useHistory();

  let user = useSelector((state) => state.session.user);

  const [stars, setStars] = useState(0);
  const [headline, setHeadline] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [body, setBody] = useState("");
  const [fake, setFake] = useState(true);
  const [errors, setErrors] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();

    user = { ...user, fakeName };

    setErrors([]);

    const response = await dispatch(fetchEditFakeName(user, fakeName)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

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
    <>
      {fake && (
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
          {/* need an input, form, backend route, store to update fakeName. useState fakeName on input onchange- set to target value */}
          <button onClick={handleClick}>Save</button>
          <button onClick={() => setFake(!fake)}>Cancel</button>
        </div>
      )}
      <div id="review-form">
        <h1 className="review-form-title">Create Review</h1>
        <ReviewProductItem productId={productId} />
        <hr className="review-lightgray-hr" />

        <form onSubmit={handleSubmit}>
          <p className="review-section-title">Overall rating</p>
          <div className="review-stars">
            <i
              class={
                stars >= 1
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(1)}
            ></i>
            <i
              class={
                stars >= 2
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(2)}
            ></i>
            <i
              class={
                stars >= 3
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(3)}
            ></i>
            <i
              class={
                stars >= 4
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(4)}
            ></i>
            <i
              class={
                stars >= 5
                  ? "fa fa-star checked fa-2xl"
                  : "fa-regular fa-star fa-2xl"
              }
              onClick={() => setStars(5)}
            ></i>
          </div>
          {/* <input
            type="number"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
          /> */}
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
          <p className="review-section-title">Add a photo</p>
          <p className="review-photo-p">
            Shoppers find images and videos more helpful than text alone.
          </p>
          <input
            type="text"
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
            className="review-headline"
            placeholder="Paste image address here."
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
      </div>
    </>
  );
};

export default AddReviewForm;
