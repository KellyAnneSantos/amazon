import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/productReducer";

const ReviewProductItem = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.products[productId]);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  return (
    <>
      <img src={product?.previewImage} alt="Product" />
      <h1>{product?.name}</h1>
    </>
  );
};

export default ReviewProductItem;
