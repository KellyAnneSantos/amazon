import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import {
  fetchAddProductImage,
  fetchProductImages,
} from "../../store/imageReducer";
import { fetchProduct } from "../../store/productReducer";
import ImageItem from "../ImageItem";
import "./ImagesTab.css";

const ImagesTab = () => {
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

    let image = { mediaUrl, imageableType: "product" };
    setErrors([]);

    const response = await dispatch(
      fetchAddProductImage(image, productId)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    setMediaUrl("");
  };

  if (!product?.id) {
    return <Redirect to="/" />;
  }

  return (
    <div id="vital-info-p">
      <div className="edit-product-top">
        <NavLink
          to={`/products/${product?.id}/edit`}
          className="edit-product-tabs"
        >
          <h1 className="edit-product-tabs">Vital Info</h1>
        </NavLink>
        <h1 className="edit-product-box">Images</h1>
        <NavLink
          to={`/products/${product?.id}/descriptions`}
          className="edit-product-tabs"
        >
          <h1 className="edit-product-tabs">Description</h1>
        </NavLink>
      </div>
      <div id="edit-product-hr-section">
        {/* <hr className="edit-short-hr" /> */}
        <hr className="edit-long-hr" />
      </div>
      <div className="edit-product-form">
        <div id="image-instructions-container">
          {/* <i class="fa-solid fa-circle-plus"></i> */}
          <p id="image-instructions">Upload additional images</p>
        </div>
        <p id="image-max">
          Uploaded: {Object.values(images).length} of 9 images. Maximum 9 images
          are allowed.
        </p>
        <form>
          <div className="edit-product-rows">
            <span className="edit-green-asterisk">*</span>
            <span className="edit-product-labels">Image URL</span>
            <input
              type="text"
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              required
              className="edit-product-input"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="image-add-btn"
          >
            Add Image
          </button>
          <ul className="error-ul">
            {errors?.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </form>
        <div id="image-inner-div">
          {/* <div className="product-cards">
            <img
              src={product?.previewImage}
              alt="Product"
              className="image-pics"
            />
            <NavLink to={`/products/${product?.id}/edit`}>
              <span className="image-trash">
                <i class="fa-solid fa-trash"></i>
              </span>
            </NavLink>
          </div> */}
          <>
            {Object.values(images)?.map((image) => {
              return <ImageItem key={image?.id} image={image} />;
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default ImagesTab;
