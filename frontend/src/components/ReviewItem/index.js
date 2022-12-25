const ReviewItem = ({ review }) => {
  const images = review.Images;
  return (
    <>
      <img src={review.User?.previewImage} alt="User" />
      <h6>{review.User?.firstName}</h6>
      <h5>{review.stars} star(s)</h5>
      <h5>{review.headline}</h5>
      <h6>Reviewed on {review.updatedAt}</h6>
      <p>{review.body}</p>
      <div>
        {images?.map((image) => (
          <img src={image?.mediaUrl} key={image?.id} alt="Product" />
        ))}
      </div>
    </>
  );
};

export default ReviewItem;
