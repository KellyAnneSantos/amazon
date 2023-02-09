import { useSelector } from "react-redux";
import "./QuestionProductItem.css";

const QuestionProductItem = ({ productId }) => {
  const product = useSelector((state) => state?.products[productId]);

  return (
    <div id="answer-left">
      <img src={product?.previewImage} alt="Product" id="answer-product-img" />
      <span id="answer-product-name">{product?.name}</span>
    </div>
  );
};

export default QuestionProductItem;
