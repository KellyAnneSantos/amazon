import { csrfFetch } from "./csrf";

const LOAD_PRODUCT = "product/load";
const LOAD_PRODUCTS = "products/load";
const ADD_PRODUCT = "product/add";
const LOAD_MY_PRODUCTS = "products/loadMine";
const EDIT_PRODUCT = "product/edit";
const SEARCH_PRODUCTS = "products/search";

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

const loadMyProducts = (payload) => {
  return {
    type: LOAD_MY_PRODUCTS,
    payload,
  };
};

const editProduct = (id) => {
  return {
    type: EDIT_PRODUCT,
    payload: id,
  };
};

const searchProducts = (payload) => {
  return {
    type: SEARCH_PRODUCTS,
    payload,
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

  if (response.ok) {
    const data = await response.json();
    dispatch(addProduct(data));
    return data;
  }
};

export const fetchMyProducts = () => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/products");
  const products = await res.json();

  dispatch(loadMyProducts(products));
};

export const fetchEditProduct = (product) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${product.id}`, {
    method: "PUT",
    body: JSON.stringify(product),
  });
  const data = await res.json();
  dispatch(editProduct(data));
  return data;
};

export const fetchSearchProducts = (query) => async (dispatch) => {
  const { name, prime, department, minPrice, maxPrice } = query;

  let nameVar = `name=${name}`;

  let primeVar;
  if (prime) {
    primeVar = `&prime=${prime}`;
  } else {
    primeVar = "";
  }

  let depVar;
  if (department) {
    depVar = `&department=${department}`;
  } else {
    depVar = "";
  }

  let minVar;
  if (minPrice) {
    minVar = `&minPrice=${minPrice}`;
  } else {
    minVar = "";
  }

  let maxVar;
  if (maxPrice) {
    maxVar = `&maxPrice=${maxPrice}`;
  } else {
    maxVar = "";
  }

  const res = await csrfFetch(
    `/api/products?${nameVar}${primeVar}${depVar}${minVar}${maxVar}`
  );
  console.log(res);
  if (res.ok) {
    const products = await res.json();
    dispatch(searchProducts(products));
  }
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
    case LOAD_MY_PRODUCTS:
      newState = {};
      const myProducts = action.payload.Products;
      myProducts.forEach((product) => {
        newState[product.id] = product;
      });
      return newState;
    case EDIT_PRODUCT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case SEARCH_PRODUCTS:
      newState = {};
      const searchProducts = action.payload.Products;
      searchProducts.forEach((searchProduct) => {
        newState[searchProduct.id] = searchProduct;
      });
      return newState;
    default:
      return state;
  }
};

export default productReducer;
