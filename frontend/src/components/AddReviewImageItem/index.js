import { useDispatch } from "react-redux";
import { fetchDeleteImage } from "../../store/imageReducer";
import "./AddReviewImageItem.css";

const AddReviewImageItem = ({ image }) => {
  const dispatch = useDispatch();

  const deleteImage = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteImage(image.id));
  };

  return (
    <div className="edit-review-add-img-card">
      <img
        src={image?.mediaUrl}
        alt="Product"
        className="edit-add-review-img"
      />
      <span className="edit-review-trash">
        <i class="fa-solid fa-trash" onClick={deleteImage}></i>
      </span>
    </div>
  );
};

export default AddReviewImageItem;
