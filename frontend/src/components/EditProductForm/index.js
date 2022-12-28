import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { fetchEditProduct } from "../../store/productReducer";

const EditProductForm = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.products[productId]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(product?.name);
  const [department, setDepartment] = useState(product?.department);
  const [price, setPrice] = useState(product?.price);
  const [description, setDescription] = useState(product?.description);
  const [freeReturn, setFreeReturn] = useState(product?.freeReturn);
  const [prime, setPrime] = useState(product?.prime);
  const [previewImage, setPreviewImage] = useState(product?.previewImage);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    product = {
      ...product,
      name,
      department,
      price,
      description,
      freeReturn,
      prime,
      previewImage,
    };
    setErrors([]);

    const response = await dispatch(
      fetchEditProduct(product, product?.id)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    if (response) history.push(`/products/${product?.id}/images/new`);
  };

  return (
    <>
      <h1>Vital Info</h1>
      <NavLink to={`/products/${product?.id}/images/new`}>
        <h1>Images</h1>
      </NavLink>
      <h1>Description</h1>
      <form onSubmit={handleSubmit}>
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
        <p>{product?.price}</p>
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
    </>
  );
};

export default EditProductForm;
