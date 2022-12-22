import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "../../store/productReducer";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  return <>ID: {product?.id}</>;
};

export default ProductShow;
