import { csrfFetch } from "./csrf";

const LOAD_ORDERS = "orders/loadMine";
const LOAD_CART = "cart/load";

const loadOrders = (orders) => {
  return {
    type: LOAD_ORDERS,
    payload: orders,
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
  const orders = await res.json();

  dispatch(loadOrders(orders));
};

export const fetchCart = () => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/cart");

  if (res.ok) {
    const data = await res.json();
    dispatch(loadCart(data));
  }
};

let newState = {};

const orderReducer = (state = {}, action) => {
  // let newState;
  switch (action.type) {
    case LOAD_ORDERS:
      newState = {};
      const orders = action.payload.Orders;
      orders.forEach((order) => {
        newState[order.id] = order;
      });
      return newState;
    case LOAD_CART:
      newState = {};
      action.payload.Orders.forEach((order) => {
        newState[order.id] = order;
      });
      return newState;
    default:
      return state;
  }
};

export default orderReducer;
