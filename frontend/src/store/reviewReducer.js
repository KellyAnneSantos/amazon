import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = "reviews/load";
const ADD_REVIEW = "review/add";
const EDIT_REVIEW = "review/edit";
const LOAD_MY_REVIEWS = "reviews/loadMine";

const loadReviews = (payload) => {
  return {
    type: LOAD_REVIEWS,
    payload,
  };
};

const addReview = (payload) => {
  return {
    type: ADD_REVIEW,
    payload,
  };
};

const editReview = (payload) => {
  return {
    type: EDIT_REVIEW,
    payload,
  };
};

const loadMyReviews = (payload) => {
  return {
    type: LOAD_MY_REVIEWS,
    payload,
  };
};

export const fetchReviews = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/reviews`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadReviews(data));
  }
};

export const fetchAddReview = (review, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addReview(data));
    return data;
  }
};

export const fetchEditReview = (review, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(editReview(data));
    return data;
  }
};

export const fetchMyReviews = () => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/reviews");

  if (res.ok) {
    const data = await res.json();
    dispatch(loadMyReviews(data));
  }
};

let newState = {};

const reviewReducer = (state = newState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      newState = {};
      action.payload.Reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case ADD_REVIEW:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case EDIT_REVIEW:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case LOAD_MY_REVIEWS:
      newState = {};
      action.payload.Reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
