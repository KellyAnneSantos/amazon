import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { fetchProduct } from "../../store/productReducer";
import "./ReviewProductItem.css";

const ReviewProductItem = ({ productId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.products[productId]);
  const user = useSelector((state) => state.session.user);
  const reviews = product?.Reviews;
  const review = reviews?.find((review) => review?.userId === user?.id);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await dispatch(fetchProduct(productId));

  //     if (!data) {
  //       return history.push("/");
  //     }
  //   };
  //   // dispatch(fetchProduct(productId));
  // }, [dispatch, productId]);

  // if (!product) {
  //   return <Redirect to="/" />;
  // }

  if (review) {
    return <Redirect to={`/reviews/${review?.id}/edit`} />;
  }

  return (
    <div className="review-product-item-container">
      <img src={product?.previewImage} alt="Product" id="review-product-img" />
      <span id="review-product-name">{product?.name}</span>
    </div>
  );
};

export default ReviewProductItem;
