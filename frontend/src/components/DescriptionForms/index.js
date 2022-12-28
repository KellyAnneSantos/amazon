import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteDescription,
  fetchEditDescription,
} from "../../store/descriptionReducer";

const DescriptionForms = ({ description }) => {
  const dispatch = useDispatch();

  const [bulletPoint, setBulletPoint] = useState(description.bulletPoint);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    description = {
      ...description,
      bulletPoint,
    };
    setErrors([]);

    const response = await dispatch(
      fetchEditDescription(description, description.productId)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  const deleteDescription = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteDescription(description.id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Bullet Point
          <input
            type="text"
            value={bulletPoint}
            onChange={(e) => setBulletPoint(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
      <button onClick={deleteDescription}>Delete</button>
    </>
  );
};

export default DescriptionForms;
