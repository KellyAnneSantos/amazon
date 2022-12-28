import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  fetchAddDescription,
  fetchDescriptions,
} from "../../store/descriptionReducer";
import { fetchProduct } from "../../store/productReducer";
import DescriptionForms from "../DescriptionForms";

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

  return (
    <>
      <NavLink to={`/products/${product?.id}/edit`}>
        <h1>Vital Info</h1>
      </NavLink>
      <NavLink to={`/products/${product?.id}/images`}>
        <h1>Images</h1>
      </NavLink>
      <h1>Description</h1>
      <p>{product?.description}</p>
      <NavLink to={`/products/${product?.id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <NavLink to={`/products/${product?.id}/edit`}>
        <button>Delete</button>
      </NavLink>
      <div>
        {descriptions?.map((description) => {
          return (
            <DescriptionForms key={description?.id} description={description} />
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Description
          <input
            type="text"
            value={bulletPoint}
            onChange={(e) => setBulletPoint(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Description</button>
      </form>
    </>
  );
};

export default DescriptionTab;
