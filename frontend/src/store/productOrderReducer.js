import { csrfFetch } from "./csrf";

const ADD_PRODUCTORDER = "productorder/add";

const addProductOrder = (payload) => {
  return {
    type: ADD_PRODUCTORDER,
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

let newState = {};

const productOrderReducer = (state = newState, action) => {
  switch (action.type) {
    case ADD_PRODUCTORDER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default productOrderReducer;
