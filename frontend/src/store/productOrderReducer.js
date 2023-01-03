import { csrfFetch } from "./csrf";

const ADD_PRODUCTORDER = "productorder/add";
const DELETE_PRODUCTORDER = "productorder/delete";

const addProductOrder = (payload) => {
  return {
    type: ADD_PRODUCTORDER,
    payload,
  };
};

const deleteProductOrder = (payload) => {
  return {
    type: DELETE_PRODUCTORDER,
    payload,
  };
};

export const fetchAddProductOrder = (productOrder) => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/productorders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productOrder),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addProductOrder(data));
    return data;
  }
};

export const fetchDeleteProductOrder = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/productorders/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteProductOrder(id));
  }
};

let newState = {};

const productOrderReducer = (state = newState, action) => {
  switch (action.type) {
    case ADD_PRODUCTORDER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_PRODUCTORDER:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default productOrderReducer;
