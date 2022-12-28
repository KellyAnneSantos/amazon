import { csrfFetch } from "./csrf";

const LOAD_ORDERS = "orders/loadMine";

const loadOrders = (orders) => {
  return {
    type: LOAD_ORDERS,
    payload: orders,
  };
};

export const fetchOrders = () => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/orders");
  const orders = await res.json();

  dispatch(loadOrders(orders));
};

const orderReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ORDERS:
      newState = { ...state };
      const orders = action.payload.Orders;
      orders.forEach((order) => {
        newState[order.id] = order;
      });
      return newState;
    default:
      return state;
  }
};

export default orderReducer;
