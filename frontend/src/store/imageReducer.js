import { csrfFetch } from "./csrf";

const LOAD_IMAGES = "images/load";
const ADD_IMAGE = "image/add";

const loadImages = (payload) => {
  return {
    type: LOAD_IMAGES,
    payload,
  };
};

const addImage = (payload) => {
  return {
    type: ADD_IMAGE,
    payload,
  };
};

export const fetchImages = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/images`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadImages(data));
  }
};

export const fetchAddImage = (image, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addImage(data));
    return data;
  }
};

let newState = {};

const imageReducer = (state = newState, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      newState = {};
      action.payload.Images.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    case ADD_IMAGE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
