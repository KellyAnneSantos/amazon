import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddReviewImage,
  fetchReviewImages,
} from "../../store/imageReducer";
import AddReviewImageItem from "../AddReviewImageItem";
import "./AddReviewImage.css";

const AddReviewImage = ({ reviewId }) => {
  const dispatch = useDispatch();

  let images = useSelector((state) => state?.images) || "";

  const [mediaUrl, setMediaUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(fetchReviewImages(reviewId));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let image = { mediaUrl, imageableType: "review" };
    setErrors([]);

    const response = await dispatch(fetchAddReviewImage(image, reviewId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    setMediaUrl("");
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Image URL
          <input
            type="text"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Image</button>
      </form> */}
      <p className="review-photo-p">
        Shoppers find images and videos more helpful than text alone. Uploaded:{" "}
        {Object.values(images).length + 1} of 10 images. Maximum 10 images are
        allowed.
      </p>
      <form>
        {/* <label>
          Image URL */}
        <input
          type="text"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
          className="review-headline"
          placeholder="Paste image address here."
          required
        />
        {/* </label> */}
        <button type="submit" onClick={handleSubmit} id="edit-review-add-btn">
          Add Image
        </button>
      </form>
      <div id="edit-review-add-container">
        {Object.values(images)?.map((image) => {
          return <AddReviewImageItem key={image?.id} image={image} />;
        })}
      </div>
    </>
  );
};

export default AddReviewImage;
