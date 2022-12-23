import { csrfFetch } from "./csrf";

const LOAD_PRODUCT = "product/load";
const LOAD_PRODUCTS = "products/load";

const loadProduct = (payload) => {
  return {
    type: LOAD_PRODUCT,
    payload,
  };
};

const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};

export const fetchProduct = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${id}`);
  const product = await res.json();

  dispatch(loadProduct(product));
};

export const fetchProducts = () => async (dispatch) => {
  const res = await csrfFetch("/api/products");
  const products = await res.json();

  dispatch(loadProducts(products));
};

const productReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_PRODUCT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case LOAD_PRODUCTS:
      newState = { ...state };
      const products = action.payload.Products;
      products.forEach((product) => {
        newState[product.id] = product;
      });
      return newState;
    default:
      return state;
  }
};

export default productReducer;
