import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { fetchReviewImages } from "../../store/imageReducer";
import { fetchProduct } from "../../store/productReducer";
import { fetchEditReview, fetchReview } from "../../store/reviewReducer";
import AddReviewImage from "../AddReviewImage";
import EditReviewForm from "../EditReviewForm";
import EditReviewProductItem from "../EditReviewProductItem";
import "./EditReviewPage.css";

const EditReviewPage = () => {
  const { reviewId } = useParams();

  const user = useSelector((state) => state.session.user);
  let review = useSelector((state) => state.reviews[reviewId]);
  const productId = review?.productId;
  // const product = useSelector((state) => state?.products[review?.productId]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoaded, setIsLoaded] = useState(false);
  const [stars, setStars] = useState(review?.stars);
  const [headline, setHeadline] = useState(review?.headline);
  const [previewImage, setPreviewImage] = useState(review?.previewImage);
  const [body, setBody] = useState(review?.body);
  const [fake, setFake] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(fetchReviewImages(reviewId));
    // dispatch(fetchProduct(review?.productId));
    dispatch(fetchReview(reviewId)).then(() => setIsLoaded(true));
  }, [dispatch, reviewId]);

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

  // if (!review?.id) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      {isLoaded && (
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
            <EditReviewProductItem productId={review?.productId} />
            {/* <div className="review-product-item-container">
          <img
            src={product?.previewImage}
            alt="Product"
            id="review-product-img"
          />
          <span id="review-product-name">{product?.name}</span>
        </div> */}
            <hr className="review-lightgray-hr" />
            <p className="review-section-title">Add a photo</p>
            {/* <p className="review-photo-p">
          Shoppers find images and videos more helpful than text alone.
        </p> */}
            <AddReviewImage reviewId={reviewId} />
            <EditReviewForm review={review} />
          </div>
        </>
      )}
    </>
  );
};

export default EditReviewPage;
