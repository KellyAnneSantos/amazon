import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import {
  fetchAddDescription,
  fetchDescriptions,
} from "../../store/descriptionReducer";
import { fetchProduct } from "../../store/productReducer";
import DescriptionForms from "../DescriptionForms";
import "./DescriptionTab.css";

const DescriptionTab = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state?.products[productId]);
  const descriptions = Object.values(
    useSelector((state) => state?.descriptions)
  );

  const [bulletPoint, setBulletPoint] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct(productId));
    dispatch(fetchDescriptions(productId));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let description = { bulletPoint };
    setErrors([]);

    const response = await dispatch(
      fetchAddDescription(description, productId)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    setBulletPoint("");
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
        <NavLink
          to={`/products/${product?.id}/images`}
          className="edit-product-tabs"
        >
          <h1 className="edit-product-tabs">Images</h1>
        </NavLink>
        <h1 className="edit-product-box">Description</h1>
      </div>
      <div id="edit-product-hr-section">
        {/* <hr className="edit-short-hr" /> */}
        <hr className="edit-long-hr" />
      </div>
      <div className="edit-product-form">
        {/* <div className="edit-product-rows">
          <span className="edit-green-asterisk">*</span>
          <span className="edit-product-labels">Description</span>
          <p>{product?.description}</p>
          <NavLink to={`/products/${product?.id}/edit`}>
            <button>Edit</button>
          </NavLink>
          <NavLink to={`/products/${product?.id}/edit`}>
            <button>Delete</button>
          </NavLink>
        </div> */}
        <form onSubmit={handleSubmit}>
          <div className="edit-product-rows">
            <span className="edit-green-asterisk">*</span>
            <span className="edit-product-labels">Description</span>
            <input
              type="text"
              value={bulletPoint}
              onChange={(e) => setBulletPoint(e.target.value)}
              required
              className="edit-product-input"
            />
          </div>
          <button type="submit" className="description-submit-btn">
            Add
          </button>
          <ul className="error-ul">
            {errors?.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </form>
        <div>
          {descriptions?.map((description) => {
            return (
              <DescriptionForms
                key={description?.id}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DescriptionTab;
