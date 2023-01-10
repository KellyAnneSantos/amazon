import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAddProduct } from "../../store/productReducer";
import "./CreateProductForm.css";

const CreateProductForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [price, setPrice] = useState("");
  //used to be 0
  const [description, setDescription] = useState("");
  const [freeReturn, setFreeReturn] = useState("");
  const [prime, setPrime] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let product = {
      name,
      department,
      price,
      description,
      freeReturn,
      prime,
      previewImage,
    };
    setErrors([]);

    const response = await dispatch(fetchAddProduct(product)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (response) history.push(`/inventory`);
  };

  return (
    <div id="vital-info-p">
      <div id="create-product-top">
        <h1 id="create-product-tab">Vital Info</h1>
      </div>
      <div id="edit-product-hr-section">
        <hr className="edit-short-hr" />
        <hr className="edit-long-hr" />
      </div>
      <form onSubmit={handleSubmit} className="edit-product-form">
        <div className="edit-product-rows">
          <span className="edit-green-asterisk">*</span>
          <span className="edit-product-labels">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="edit-product-input"
          />
        </div>
        <div className="edit-product-rows">
          <span className="edit-green-asterisk">*</span>
          <span className="edit-product-labels">Department</span>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="edit-product-input"
          />
        </div>
        <div className="edit-product-rows">
          <span className="edit-green-asterisk">*</span>
          <span className="edit-product-labels">Price</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="edit-product-input"
          />
        </div>
        <div className="edit-product-rows">
          <span className="edit-green-asterisk">*</span>
          <span className="edit-product-labels">Description</span>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="edit-product-input"
          />
        </div>
        <div className="edit-product-free-row">
          <span className="edit-green-asterisk">*</span>
          <span className="edit-free-label">Free Return?</span>
          <input
            type="checkbox"
            checked={freeReturn}
            onChange={(e) => setFreeReturn(!freeReturn)}
          />
        </div>
        <div id="edit-product-prime-row">
          <span className="edit-green-asterisk">*</span>
          <span className="edit-prime-label">Prime Shipping Available?</span>
          <input
            type="checkbox"
            checked={prime}
            onChange={(e) => setPrime(!prime)}
          />
        </div>
        <div className="edit-product-rows">
          <span className="edit-green-asterisk">*</span>
          <span className="edit-product-labels">Preview Image</span>
          <input
            type="text"
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
            required
            className="edit-product-input"
          />
        </div>
        <button type="submit" className="inventory-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
