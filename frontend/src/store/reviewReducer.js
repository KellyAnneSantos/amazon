import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = "reviews/load";
const ADD_REVIEW = "review/add";
const EDIT_REVIEW = "review/edit";
const LOAD_MY_REVIEWS = "reviews/loadMine";
const LOAD_USER_REVIEWS = "reviews/loadUsers";
const DELETE_REVIEW = "review/delete";
const LOAD_REVIEW = "review/load";

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

const loadUserReviews = (payload) => {
  return {
    type: LOAD_USER_REVIEWS,
    payload,
  };
};

const deleteReview = (payload) => {
  return {
    type: DELETE_REVIEW,
    payload,
  };
};

const loadReview = (payload) => {
  return {
    type: LOAD_REVIEW,
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

export const fetchUserReviews = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/reviews`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadUserReviews(data));
  }
};

export const fetchDeleteReview = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteReview(id));
  }
};

export const fetchReview = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadReview(data));
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
    case LOAD_USER_REVIEWS:
      newState = {};
      action.payload.Reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case DELETE_REVIEW:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case LOAD_REVIEW:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;
