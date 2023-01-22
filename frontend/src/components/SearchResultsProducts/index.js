import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./SearchResultsProducts.css";

const SearchResultsProducts = ({ product }) => {
  let checkedStarArr = [];
  if (product.avgStarRating > 0) {
    checkedStarArr = Array.from(
      Array(Math.floor(product.avgStarRating)).keys()
    );
  }

  let starArr = [];
  if (checkedStarArr.length) {
    starArr = Array.from(Array(5 - checkedStarArr.length).keys());
  }

  return (
    <div className="search-product-rows">
      <NavLink to={`/products/${product?.id}`} className="search-product-imgs">
        <img
          src={product?.previewImage}
          alt="Product"
          className="search-product-imgs"
        />
      </NavLink>
      <div className="search-product-right">
        <NavLink
          to={`/products/${product?.id}`}
          className="search-product-name"
        >
          <p className="search-product-name">{product?.name}</p>
        </NavLink>
        <div className="search-rating-row">
          <div className="search-star">
            {checkedStarArr.length
              ? checkedStarArr.map((star, idx) => {
                  return (
                    <i
                      className="fa fa-star checked"
                      id="product-orange-star"
                      key={idx}
                    ></i>
                  );
                })
              : ""}
            {starArr.length
              ? starArr.map((star, idx) => {
                  return (
                    <i
                      className="fa-regular fa-star"
                      id="product-orange-star"
                      key={idx}
                    ></i>
                  );
                })
              : ""}
          </div>
          <div className="search-rating-num">{product?.numReviews}</div>
        </div>
        <div className="search-price">${product?.price.toFixed(2)}</div>
        <div>
          {product?.prime && (
            <img
              id="cart-form-prime-logo"
              src="../../images/kisspng-amazon-com-amazon-prime-amazon-video-retail-prime-amazon-prime-5b376c3c2a9899.6153089515303588441745.png"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsProducts;
