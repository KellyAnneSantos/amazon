import { csrfFetch } from "./csrf";

const LOAD_REVIEW_HELPFULS = "helpfuls/loadToReview";
const ADD_REVIEW_HELPFUL = "helpful/addToReview";

const loadReviewHelpfuls = (payload) => {
  return {
    type: LOAD_REVIEW_HELPFULS,
    payload,
  };
};

const addReviewHelpful = (payload) => {
  return {
    type: ADD_REVIEW_HELPFUL,
    payload,
  };
};

export const fetchReviewHelpfuls = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}/helpfuls`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadReviewHelpfuls(data));
  }
};

export const fetchAddReviewHelpful = (helpful, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}/helpfuls`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(helpful),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addReviewHelpful(data));
    return data;
  }
};

let newState = {};

const helpfulReducer = (state = newState, action) => {
  switch (action.type) {
    case LOAD_REVIEW_HELPFULS:
      newState = {};
      action.payload.Helpfuls.forEach((helpful) => {
        newState[helpful.id] = helpful;
      });
      return newState;
    case ADD_REVIEW_HELPFUL:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default helpfulReducer;
