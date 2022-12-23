import { csrfFetch } from "./csrf";

const LOAD_IMAGES = "images/load";

const loadImages = (payload) => {
  return {
    type: LOAD_IMAGES,
    payload,
  };
};

export const fetchImages = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/images`);
  const images = await res.json();

  let object = {};
  images.Images.forEach((image) => {
    object[image.id] = image;
  });

  dispatch(loadImages(object));
  return res;
};

const initialState = {
  image: null,
};

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_IMAGES:
      newState = {
        ...state,
        image: action.payload,
      };
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
