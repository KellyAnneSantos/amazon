import { csrfFetch } from "./csrf";

const LOAD_DESCRIPTIONS = "descriptions/load";
const ADD_DESCRIPTION = "description/add";
const EDIT_DESCRIPTION = "description/edit";
const DELETE_DESCRIPTION = "description/delete";
const LOAD_DESCRIPTION = "description/load";

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

const editDescription = (payload) => {
  return {
    type: EDIT_DESCRIPTION,
    payload,
  };
};

const deleteDescription = (payload) => {
  return {
    type: DELETE_DESCRIPTION,
    payload,
  };
};

const loadDescription = (payload) => {
  return {
    type: LOAD_DESCRIPTION,
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

export const fetchEditDescription = (description, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/descriptions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(description),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(editDescription(data));
    return data;
  }
};

export const fetchDeleteDescription = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/descriptions/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteDescription(id));
  }
};

export const fetchDescription = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/descriptions/${id}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadDescription(data));
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
    case EDIT_DESCRIPTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_DESCRIPTION:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case LOAD_DESCRIPTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default descriptionReducer;
