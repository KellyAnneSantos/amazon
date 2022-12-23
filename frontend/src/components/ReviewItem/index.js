const ReviewItem = ({ review }) => {
  return (
    <>
      <img src={review.User.previewImage} alt="User" />
      <h4>{review.User.firstName}</h4>
      <h3>{review.headline}</h3>
      <h4>Reviewed on {review.updatedAt}</h4>
      <p>{review.body}</p>
    </>
  );
};

export default ReviewItem;
