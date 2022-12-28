import { useDispatch } from "react-redux";
import { fetchDeleteImage } from "../../store/imageReducer";

const ImageItem = ({ image }) => {
  const dispatch = useDispatch();

  const deleteImage = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteImage(image.id));
  };

  return (
    <>
      <img src={image?.mediaUrl} alt="Product" />
      <button onClick={deleteImage}>Delete</button>
    </>
  );
};

export default ImageItem;
