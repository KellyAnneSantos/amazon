import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../store/productReducer";
import { fetchReviews } from "../../store/reviewReducer";
import { fetchProductImages } from "../../store/imageReducer";
import ReviewItem from "../ReviewItem";
import { fetchAddProductOrder } from "../../store/productOrderReducer";
import "./ProductShow.css";
import QuestionAnswerItem from "../QuestionAnswerItem";
import { fetchQuestions } from "../../store/questionReducer";

const ProductShow = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { productId } = useParams();

  const user = useSelector((state) => state.session.user);
  let product = useSelector((state) => state?.products[productId]);
  let reviews = Object.values(useSelector((state) => state?.reviews));
  let images = useSelector((state) => state?.images) || "";
  const descriptions = product?.Descriptions;
  const questions = Object.values(useSelector((state) => state.questions));
  let amazonDog = useSelector((state) => state?.products[999999999]);

  const [quantity, setQuantity] = useState(parseInt(1));
  let [source, setSource] = useState(product?.previewImage);
  const [modal, setModal] = useState(false);
  const [average, setAverage] = useState(product?.avgStarRating);

  let arr = Array.from(Array(31).keys());
  arr.shift();
  let checkedStarArr = [];
  if (average > 0) {
    checkedStarArr = Array.from(Array(Math.floor(average)).keys());
  }
  let starArr = [];
  if (checkedStarArr.length) {
    starArr = Array.from(Array(5 - checkedStarArr.length).keys());
  }

  const handleClick = async (e) => {
    e.preventDefault();

    history.push(`/search?department=${product?.department}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let productOrder = { productId, quantity: parseInt(quantity) };

    await dispatch(fetchAddProductOrder(productOrder));
    history.push("/my/cart");
  };

  useEffect(() => {
    let sum = 0.0;
    if (reviews) {
      for (const review of reviews) {
        sum += parseInt(review?.stars);
      }
      setAverage(sum / reviews.length);
    }
  }, [reviews]);

  useEffect(() => {
    setSource(product?.previewImage);
    dispatch(fetchProduct(productId));
    dispatch(fetchReviews(productId));
    dispatch(fetchProductImages(productId));
    dispatch(fetchQuestions(productId));
  }, [dispatch, productId, product?.previewImage]);

  if (amazonDog?.department === "New" || isNaN(productId)) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div id="product-page">
        <span id="product-categories" onClick={handleClick}>
          {product?.department}{" "}
        </span>
        <span id="product-categories-carat">
          {">"} {product?.name}
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
            {/* <h2 id="product-p-merchant">{product?.merchantName}</h2> */}
            <div id="product-p-starratings">
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
              <span id="product-info-num-reviews">
                {reviews?.length} ratings
              </span>
            </div>
            <hr className="product-dividers" />
            <div id="product-info-price">${product?.price.toFixed(2)}</div>
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
            <div id="cart-price">${product?.price.toFixed(2)}</div>
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
            <button id="buy-cart-btn" onClick={() => setModal(true)}>
              Buy Now
            </button>
            {/* {modal && (
              <Modal>
                <form>
                  <h1>Buy now: {product?.name}</h1>
                  <div>
                    <img src={product?.previewImage} />
                    <span>Sold by </span>
                    <span>{product?.User?.merchantName}</span>
                  </div>
                  <hr />
                  <div>
                    <p>Ship to</p>
                    <p>
                      {user?.firstName} {user?.lastName}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p>Pay with</p>
                  </div>
                  <hr />
                  <div>
                    <p>Total</p>
                    <div>
                      <p>(includes tax)</p>
                    </div>
                  </div>
                  <p>
                    By placing your order, you agree to Amazon's privacy notice
                    and conditions of use.
                  </p>
                  <div>
                    <button type="Submit">Place your order</button>
                  </div>
                </form>
              </Modal>
            )} */}
            <div id="product-secure-container">
              <i className="fa-solid fa-lock fa-xs"></i>
              <span id="product-secure">Secure transaction</span>
            </div>
            {/* <div id="product-form-soldby-container">
              <span id="product-form-sold">Sold by </span>
              <span id="product-form-merchant">
                {product?.User?.merchantName}
              </span>
            </div> */}
          </div>
        </div>
        <hr className="product-dividers" />
        <div>
          <h2 id="product-question-title">Looking for specific info?</h2>
          <h2 id="product-question-h2">Customer questions & answers</h2>
          <div>
            {questions?.map((question) => {
              return <QuestionAnswerItem question={question} />;
            })}
          </div>
          <div id="product-post-q-container">
            <p id="product-no-answer">
              Don't see the answer you're looking for?
            </p>
            <button id="product-post-q-btn">Post your question</button>
          </div>
        </div>
        <hr className="product-dividers" />
        <div id="product-reviews-container">
          <div id="review-summary-container">
            <h2 id="product-review-title">Customer reviews</h2>
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
            <h4 id="product-review-rating-count">
              {reviews?.length} global ratings
            </h4>
            <hr id="product-review-divider" />
            <h4 id="product-review-btn-title">Review this product</h4>
            <p id="product-review-share">
              Share your thoughts with other customers
            </p>
            <NavLink to={`/products/${product?.id}/reviews/new`}>
              <button id="write-review-btn">Write a customer review</button>
            </NavLink>
          </div>
          <div id="right-product-reviews-container">
            <h4 id="product-reviews-w-imgs">Reviews with images</h4>
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
            <p id="product-see">See all customer images</p>
            <h4 id="product-reviews-right-title">Reviews</h4>
            <div>
              {reviews?.map((review) => {
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
