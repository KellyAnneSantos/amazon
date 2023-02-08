import { csrfFetch } from "./csrf";

const LOAD_QUESTIONS = "questions/load";
const LOAD_QUESTION = "question/load";

const loadQuestions = (payload) => {
  return {
    type: LOAD_QUESTIONS,
    payload,
  };
};

const loadQuestion = (payload) => {
  return {
    type: LOAD_QUESTION,
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

export const fetchQuestion = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/questions/${id}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadQuestion(data));
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
    case LOAD_QUESTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default questionReducer;
