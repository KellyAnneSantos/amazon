import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAddProduct } from "../../store/productReducer";

const CreateProductForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [price, setPrice] = useState(0.0);
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
    <form onSubmit={handleSubmit}>
      <h1>Vital Info</h1>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Department
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </label>
      <label>
        Price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Free Return?
        <input
          type="checkbox"
          checked={freeReturn}
          onChange={(e) => setFreeReturn(!freeReturn)}
        />
      </label>
      <label>
        Prime Shipping Available?
        <input
          type="checkbox"
          checked={prime}
          onChange={(e) => setPrime(!prime)}
        />
      </label>
      <label>
        Preview Image
        <input
          type="text"
          value={previewImage}
          onChange={(e) => setPreviewImage(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateProductForm;
