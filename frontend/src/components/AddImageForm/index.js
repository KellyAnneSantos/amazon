import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchAddImage, fetchImages } from "../../store/imageReducer";
import { fetchProduct } from "../../store/productReducer";

const AddImageForm = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const product = useSelector((state) => state?.products[productId]);
  let images = useSelector((state) => state?.images) || "";

  const [mediaUrl, setMediaUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct(productId));
    dispatch(fetchImages(productId));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let image = { mediaUrl };
    setErrors([]);

    const response = await dispatch(fetchAddImage(image)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return (
    <>
      <h1>Images</h1>
      <img src={product?.previewImage} />
      <div>
        {Object.values(images)?.map((image) => {
          return <img src={image?.mediaUrl} key={image?.id} alt="Product" />;
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

export default AddImageForm;
