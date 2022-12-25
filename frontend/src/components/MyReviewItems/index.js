import ProductItem from "../ProductItem";

const MyReviewItems = ({ review }) => {
  return (
    <>
      <img src={review.User?.previewImage} alt="User" />
      <h6>
        {review.User?.firstName} reviewed a product on {review.updatedAt}
      </h6>
      <h5>{review.stars} star(s)</h5>
      <h5>{review.headline}</h5>
      <p>{review.body}</p>
      <ProductItem productId={review.productId} />
    </>
  );
};

export default MyReviewItems;
