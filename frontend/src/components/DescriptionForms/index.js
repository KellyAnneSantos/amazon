import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteDescription,
  fetchEditDescription,
} from "../../store/descriptionReducer";
import "./DescriptionForms.css";

const DescriptionForms = ({ description }) => {
  const dispatch = useDispatch();

  const [bulletPoint, setBulletPoint] = useState(description.bulletPoint);
  const [errors, setErrors] = useState([]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   description = {
  //     ...description,
  //     bulletPoint,
  //   };
  //   setErrors([]);

  //   const response = await dispatch(
  //     fetchEditDescription(description, description.productId)
  //   ).catch(async (res) => {
  //     const data = await res.json();
  //     if (data && data.errors) setErrors(data.errors);
  //   });
  // };

  const deleteDescription = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteDescription(description.id));
  };

  return (
    <>
      <div className="edit-description-rows">
        <span className="edit-green-asterisk">*</span>
        <span className="edit-product-labels">Description</span>
        <p className="edit-description-bullet">{bulletPoint}</p>
        {/* <NavLink to={`/products/${product?.id}/edit`}>
          <button>Edit</button>
        </NavLink>
        <NavLink to={`/products/${product?.id}/edit`}>
          <button>Delete</button>
        </NavLink> */}
      </div>
      {/* <form onSubmit={handleSubmit}>
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
        <button type="submit" className="description-save-btn">
          Save
        </button>
      </form> */}
      <button onClick={deleteDescription} className="description-submit-btn">
        Delete
      </button>
    </>
  );
};

export default DescriptionForms;
