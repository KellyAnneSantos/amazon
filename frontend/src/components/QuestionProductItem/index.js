import { useSelector } from "react-redux";

const QuestionProductItem = ({ productId }) => {
  const product = useSelector((state) => state?.products[productId]);

  return (
    <>
      <img src={product?.previewImage} alt="Product" />
      <span>{product?.name}</span>
    </>
  );
};

export default QuestionProductItem;
