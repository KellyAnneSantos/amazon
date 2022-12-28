import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import imageReducer from "./imageReducer";
import userReducer from "./userReducer";
import descriptionReducer from "./descriptionReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  products: productReducer,
  reviews: reviewReducer,
  images: imageReducer,
  users: userReducer,
  descriptions: descriptionReducer,
});
let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
