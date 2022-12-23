const ReviewImages = ({ review }) => {
  const images = review.Images;
  return (
    <div>
      {images?.map((image) => (
        <img src={image?.mediaUrl} key={image?.id} />
      ))}
    </div>
  );
};

export default ReviewImages;
