import { csrfFetch } from "./csrf";

const SEARCH_RESULTS = "results/search";

const searchResults = (payload) => {
  return {
    type: SEARCH_RESULTS,
    payload,
  };
};

export const fetchSearchResults = (query) => async (dispatch) => {
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

  if (res.ok) {
    const data = await res.json();
    dispatch(searchResults(data));
    return data;
  }
};

const searchReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case SEARCH_RESULTS:
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

export default searchReducer;
