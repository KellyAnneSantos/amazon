import { csrfFetch } from "./csrf";

const LOAD_PRODUCT = "product/load";
const LOAD_PRODUCTS = "products/load";
const ADD_PRODUCT = "products/add";

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

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
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

export const fetchAddProduct = (product) => async (dispatch) => {
  const {
    name,
    department,
    price,
    description,
    freeReturn,
    prime,
    previewImage,
  } = product;
  const response = await csrfFetch("/api/products", {
    method: "POST",
    body: JSON.stringify({
      name,
      department,
      price,
      description,
      freeReturn,
      prime,
      previewImage,
    }),
  });
  const data = await response.json();
  dispatch(addProduct(data));
  return data;
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
    case ADD_PRODUCT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default productReducer;
