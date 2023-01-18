import { csrfFetch } from "./csrf";

const LOAD_QUESTIONS = "questions/load";

const loadQuestions = (payload) => {
  return {
    type: LOAD_QUESTIONS,
    payload,
  };
};

export const fetchQuestions = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/questions`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadQuestions(data));
  }
};

let newState = {};

const questionReducer = (state = newState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      newState = {};
      action.payload.Questions.forEach((question) => {
        newState[question.id] = question;
      });
      return newState;
    default:
      return state;
  }
};

export default questionReducer;
