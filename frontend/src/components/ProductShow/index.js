import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../store/productReducer";
import { fetchReviews } from "../../store/reviewReducer";
import { fetchProductImages } from "../../store/imageReducer";
import ReviewItem from "../ReviewItem";
import { fetchAddProductOrder } from "../../store/productOrderReducer";
import "./ProductShow.css";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const user = useSelector((state) => state.session.user);
  const product = useSelector((state) => state?.products[productId]);
  let reviews = useSelector((state) => state?.reviews) || "";
  let images = useSelector((state) => state?.images) || "";
  const descriptions = product?.Descriptions;
  const questions = product?.Questions;

  const [quantity, setQuantity] = useState(1);
  let [source, setSource] = useState(product?.previewImage);

  let arr = Array.from(Array(31).keys());
  arr.shift();

  let checkedStarArr = [];
  if (product?.avgStarRating > 0) {
    checkedStarArr = Array.from(
      Array(Math.floor(product?.avgStarRating)).keys()
    );
  }
  let starArr = [];
  if (checkedStarArr.length) {
    starArr = Array.from(Array(5 - checkedStarArr.length).keys());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let productOrder = { productId, quantity };

    await dispatch(fetchAddProductOrder(productOrder));
  };

  useEffect(() => {
    setSource(product?.previewImage);
    dispatch(fetchProduct(productId));
    dispatch(fetchReviews(productId));
    dispatch(fetchProductImages(productId));
  }, [dispatch, productId, product?.previewImage]);

  if (!user) return <Redirect to="/signin" />;

  return (
    <>
      <div id="product-page">
        <span id="product-categories">
          {product?.department} > {product?.name}
        </span>
        <div id="product-imgs-container">
          <div id="mini-img-container">
            <img
              src={product?.previewImage}
              alt="Product"
              className="mini-product-img"
              id={source === product?.previewImage && "product-select-border"}
              onClick={(e) => setSource(product?.previewImage)}
            />
            <div>
              {Object.values(images)?.map((image) => {
                return (
                  <img
                    src={image?.mediaUrl}
                    key={image?.id}
                    alt="Product"
                    className="mini-product-img"
                    id={source === image?.mediaUrl && "product-select-border"}
                    onClick={(e) => setSource(image?.mediaUrl)}
                  />
                );
              })}
            </div>
          </div>
          <img src={source} alt="Product" id="main-product-img" />
          <div id="product-info">
            <h1 id="product-p-name">{product?.name}</h1>
            <h2 id="product-p-merchant">{product?.User.merchantName}</h2>
            <div id="product-p-starratings">
              {checkedStarArr.length
                ? checkedStarArr.map((star) => {
                    return <i class="fa fa-star checked"></i>;
                  })
                : ""}
              {starArr.length
                ? starArr.map((star) => {
                    return <i class="fa-regular fa-star"></i>;
                  })
                : ""}
              <span id="product-info-num-reviews">
                {product?.numReviews} ratings
              </span>
            </div>
            <hr className="product-dividers" />
            <div id="product-info-price">${product?.price}</div>
            {product?.prime && (
              <img
                id="product-prime-logo"
                src="../../images/kisspng-amazon-com-amazon-prime-amazon-video-retail-prime-amazon-prime-5b376c3c2a9899.6153089515303588441745.png"
              />
            )}
            {product?.freeReturn && (
              <div id="product-info-free">FREE Returns</div>
            )}
            <hr className="product-dividers" />
            <h3 id="product-about">About this item</h3>
            <ul id="product-descr-ul">
              <li className="product-info-descr">{product?.description}</li>
              {descriptions?.map((description) => (
                <li className="product-info-descr" key={description.id}>
                  {description.bulletPoint}
                </li>
              ))}
            </ul>
          </div>
          <div id="cart-form">
            <div id="cart-price">${product?.price}</div>
            {product?.prime && (
              <img
                id="cart-form-prime-logo"
                src="../../images/kisspng-amazon-com-amazon-prime-amazon-video-retail-prime-amazon-prime-5b376c3c2a9899.6153089515303588441745.png"
              />
            )}
            {product?.freeReturn && (
              <div id="cart-free-returns">FREE Returns</div>
            )}
            <form onSubmit={handleSubmit}>
              <span id="qty-label">Qty: </span>
              <select
                name="type"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                id="qty-form"
              >
                {arr?.map((ele) => {
                  return (
                    <option key={ele} value={ele}>
                      {ele}
                    </option>
                  );
                })}
              </select>
              <button type="Submit" id="add-cart-btn">
                Add to Cart
              </button>
            </form>
            <button id="buy-cart-btn">Buy Now</button>
          </div>
        </div>
        <hr className="product-dividers" />
        <div>
          <h2>Looking for specific info?</h2>
          <h2>Customer questions & answers</h2>
          {questions?.map((question) => {
            return (
              <>
                <p>Question: {question.body}</p>
                <p>Answer: {question.Answers[0].body}</p>
              </>
            );
          })}
        </div>
        <hr className="product-dividers" />
        <div id="product-reviews-container">
          <div id="review-summary-container">
            <h2>Customer reviews</h2>
            {checkedStarArr.length
              ? checkedStarArr.map((star) => {
                  return <i class="fa fa-star checked"></i>;
                })
              : ""}
            {starArr.length
              ? starArr.map((star) => {
                  return <i class="fa-regular fa-star"></i>;
                })
              : ""}
            <h4>{product?.numReviews} global ratings</h4>
            <h4>Review this product</h4>
            <p>Share your thoughts with other customers</p>
            <NavLink to={`/products/${product?.id}/reviews/new`}>
              <button id="write-review-btn">Write a customer review</button>
            </NavLink>
          </div>
          <div id="right-product-reviews-container">
            <h4>Reviews with images</h4>
            <div id="review-images-container">
              {Object.values(reviews)?.map((review) => {
                // return <ReviewImages key={review?.id} review={review} />;
                return (
                  <img
                    key={review?.id}
                    src={review?.previewImage}
                    className="reviews-w-images"
                  />
                );
              })}
            </div>
            <h4>Most recent reviews</h4>
            <div>
              {Object.values(reviews).map((review) => {
                return <ReviewItem key={review?.id} review={review} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShow;
