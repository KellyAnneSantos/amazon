import { useDispatch } from "react-redux";
import { fetchDeleteImage } from "../../store/imageReducer";
import "./ImageItem.css";

const ImageItem = ({ image }) => {
  const dispatch = useDispatch();

  const deleteImage = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteImage(image.id));
  };

  return (
    <div className="product-cards">
      <img src={image?.mediaUrl} alt="Product" className="image-pics" />
      <span className="image-map-trash">
        <i class="fa-solid fa-trash" onClick={deleteImage}></i>
      </span>
    </div>
  );
};

export default ImageItem;
