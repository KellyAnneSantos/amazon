const SearchResultsProducts = ({ product }) => {
  return (
    <>
      <img src={product?.previewImage} alt="Product" />
      <h1>{product?.name}</h1>
      <div>{product?.avgStarRating} stars</div>
      <div>{product?.numReviews} ratings</div>
      <div>{product?.price}</div>
    </>
  );
};

export default SearchResultsProducts;
