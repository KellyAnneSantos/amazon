import "./ReviewImages.css";

const ReviewImages = ({ review }) => {
  const images = review.Images;
  return (
    <div>
      <img src={review.previewImage} className="reviews-w-images" />
      {images?.map((image) => (
        <img
          className="reviews-w-images"
          src={image?.mediaUrl}
          key={image?.id}
        />
      ))}
    </div>
  );
};

export default ReviewImages;
