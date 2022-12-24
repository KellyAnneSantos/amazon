import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = "reviews/load";
const ADD_REVIEW = "review/add";

const loadReviews = (payload) => {
  return {
    type: LOAD_REVIEWS,
    payload,
  };
};

const addReview = (product) => {
  return {
    type: ADD_REVIEW,
    payload: product,
  };
};

export const fetchReviews = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/reviews`);
  const reviews = await res.json();

  let object = {};
  reviews.Reviews.forEach((review) => {
    object[review.id] = review;
  });

  dispatch(loadReviews(object));
  return res;
};

export const fetchAddReview = (review, id) => async (dispatch) => {
  const { stars, headline, previewImage, body } = review;
  const response = await csrfFetch(`/api/products/${id}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stars,
      headline,
      previewImage,
      body,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addReview(data));
    return data;
  }
};

const initialState = {
  review: null,
};

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_REVIEWS:
      newState = {
        ...state,
        review: action.payload,
      };
      return newState;
    case ADD_REVIEW:
      newState = {
        ...state,
        review: {
          ...state.review,
          [action.payload.id]: action.payload,
        },
      };
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
