import { csrfFetch } from "./csrf";

const LOAD_PRODUCT = "product/load";

const loadProduct = (payload) => {
  return {
    type: LOAD_PRODUCT,
    payload,
  };
};

export const fetchProduct = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}`);
  const product = await res.json();

  dispatch(loadProduct(product));
};

const productReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_PRODUCT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default productReducer;
