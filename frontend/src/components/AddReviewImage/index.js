import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddReviewImage,
  fetchReviewImages,
} from "../../store/imageReducer";
import ImageItem from "../ImageItem";

const AddReviewImage = ({ reviewId }) => {
  const dispatch = useDispatch();

  // const product = useSelector((state) => state?.products[productId]);
  let images = useSelector((state) => state?.images) || "";

  const [mediaUrl, setMediaUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // dispatch(fetchProduct(productId));
    dispatch(fetchReviewImages(reviewId));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let image = { mediaUrl };
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
      <div>
        {Object.values(images)?.map((image) => {
          return <ImageItem key={image?.id} image={image} />;
        })}
      </div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  );
};

export default AddReviewImage;
