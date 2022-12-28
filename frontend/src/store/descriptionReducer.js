import { csrfFetch } from "./csrf";

const LOAD_DESCRIPTIONS = "descriptions/load";
const ADD_DESCRIPTION = "description/add";

const loadDescriptions = (payload) => {
  return {
    type: LOAD_DESCRIPTIONS,
    payload,
  };
};

const addDescription = (payload) => {
  return {
    type: ADD_DESCRIPTION,
    payload,
  };
};

export const fetchDescriptions = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/descriptions`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadDescriptions(data));
  }
};

export const fetchAddDescription = (description, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/descriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(description),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addDescription(data));
    return data;
  }
};

let newState = {};

const descriptionReducer = (state = newState, action) => {
  switch (action.type) {
    case LOAD_DESCRIPTIONS:
      newState = {};
      action.payload.Descriptions.forEach((description) => {
        newState[description.id] = description;
      });
      return newState;
    case ADD_DESCRIPTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default descriptionReducer;
