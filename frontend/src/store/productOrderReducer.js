import { csrfFetch } from "./csrf";

const ADD_PRODUCTORDER = "productorder/add";
const DELETE_PRODUCTORDER = "productorder/delete";
const EDIT_PRODUCTORDER = "productorder/edit";
const LOAD_PRODUCTORDERS = "productorders/load";
const LOAD_PRODUCTORDER = "productorder/load";
const LOAD_CART = "cart/load";

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

const editProductOrder = (payload) => {
  return {
    type: EDIT_PRODUCTORDER,
    payload,
  };
};

const loadProductOrders = (payload) => {
  return {
    type: LOAD_PRODUCTORDERS,
    payload,
  };
};

const loadProductOrder = (payload) => {
  return {
    type: LOAD_PRODUCTORDER,
    payload,
  };
};

const loadCart = (payload) => {
  return {
    type: LOAD_CART,
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

export const fetchEditProductOrder = (productorder, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/productorders/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productorder),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(editProductOrder(data));
    return data;
  }
};

export const fetchProductOrders = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/orders/${id}/productorders`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadProductOrders(data));
  }
};

export const fetchProductOrder = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/productorders/${id}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadProductOrder(data));
  }
};

export const fetchLoadCart = () => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/cart/productorders");

  if (res.ok) {
    const data = await res.json();
    dispatch(loadCart(data));
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
    case EDIT_PRODUCTORDER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case LOAD_PRODUCTORDERS:
      newState = {};
      action.payload.ProductOrders.forEach((productorder) => {
        newState[productorder.id] = productorder;
      });
      return newState;
    case LOAD_PRODUCTORDER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case LOAD_CART:
      newState = {};
      if (Object.keys(action.payload).length !== 0) {
        action.payload.ProductOrders.forEach((productOrder) => {
          newState[productOrder.id] = productOrder;
        });
      }
      return newState;
    default:
      return state;
  }
};

export default productOrderReducer;
