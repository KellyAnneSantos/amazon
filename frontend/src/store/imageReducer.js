import { csrfFetch } from "./csrf";

const LOAD_PRODUCT_IMAGES = "images/loadToProduct";
const ADD_PRODUCT_IMAGE = "image/addToProduct";
const DELETE_IMAGE = "image/delete";
const ADD_REVIEW_IMAGE = "image/addToReview";
const LOAD_REVIEW_IMAGES = "images/loadToReview";

const loadProductImages = (payload) => {
  return {
    type: LOAD_PRODUCT_IMAGES,
    payload,
  };
};

const addProductImage = (payload) => {
  return {
    type: ADD_PRODUCT_IMAGE,
    payload,
  };
};

const deleteImage = (payload) => {
  return {
    type: DELETE_IMAGE,
    payload,
  };
};

const addReviewImage = (payload) => {
  return {
    type: ADD_REVIEW_IMAGE,
    payload,
  };
};

const loadReviewImages = (payload) => {
  return {
    type: LOAD_REVIEW_IMAGES,
    payload,
  };
};

export const fetchProductImages = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/images`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadProductImages(data));
  }
};

export const fetchAddProductImage = (image, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addProductImage(data));
    return data;
  }
};

export const fetchDeleteImage = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteImage(id));
  }
};

export const fetchAddReviewImage = (image, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addReviewImage(data));
    return data;
  }
};

export const fetchReviewImages = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}/images`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadReviewImages(data));
  }
};

let newState = {};

const imageReducer = (state = newState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_IMAGES:
      newState = {};
      action.payload.Images.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    case ADD_PRODUCT_IMAGE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_IMAGE:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case ADD_REVIEW_IMAGE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case LOAD_REVIEW_IMAGES:
      newState = {};
      action.payload.Images.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
