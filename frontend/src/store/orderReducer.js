import { csrfFetch } from "./csrf";

const LOAD_ORDERS = "orders/loadMine";
const LOAD_CART = "cart/load";

const loadOrders = (payload) => {
  return {
    type: LOAD_ORDERS,
    payload,
  };
};

const loadCart = (payload) => {
  return {
    type: LOAD_CART,
    payload,
  };
};

export const fetchOrders = () => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/orders");

  if (res.ok) {
    const data = await res.json();
    dispatch(loadOrders(data));
  }
};

export const fetchCart = () => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/cart");

  if (res.ok) {
    const data = await res.json();
    dispatch(loadCart(data));
  }
};

let newState = {};

const orderReducer = (state = newState, action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      newState = {};
      action.payload.Orders.forEach((order) => {
        newState[order.id] = order;
      });
      return newState;
    case LOAD_CART:
      newState = {};
      newState[action.payload.Orders.id] = action.payload.Orders;
      return newState;
    default:
      return state;
  }
};

export default orderReducer;
