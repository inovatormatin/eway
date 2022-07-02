import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const userInfoFromStorage = localStorage.getItem("userInfo")
// ? JSON.parse(localStorage.getItem("userInfo"))
// : null;

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
