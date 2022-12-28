import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  fetchAddProductImage,
  fetchProductImages,
} from "../../store/imageReducer";
import { fetchProduct } from "../../store/productReducer";
import ImageItem from "../ImageItem";

const AddProductImage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state?.products[productId]);
  let images = useSelector((state) => state?.images) || "";

  const [mediaUrl, setMediaUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct(productId));
    dispatch(fetchProductImages(productId));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let image = { mediaUrl };
    setErrors([]);

    const response = await dispatch(
      fetchAddProductImage(image, productId)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    setMediaUrl("");
  };

  return (
    <>
      <NavLink to={`/products/${product?.id}/edit`}>
        <h1>Vital Info</h1>
      </NavLink>
      <h1>Images</h1>
      <NavLink to={`/products/${product?.id}/descriptions`}>
        <h1>Description</h1>
      </NavLink>
      <img src={product?.previewImage} />
      <NavLink to={`/products/${product?.id}/edit`}>
        <button>Delete</button>
      </NavLink>
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

export default AddProductImage;
