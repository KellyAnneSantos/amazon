import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = "reviews/load";

const loadReviews = (payload) => {
  return {
    type: LOAD_REVIEWS,
    payload,
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
    default:
      return state;
  }
};

export default reviewReducer;
