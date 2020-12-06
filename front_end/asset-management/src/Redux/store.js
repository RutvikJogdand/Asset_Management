import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import listingsReducer from "./MainListingRedux/mainListingReducer"

const rootReducer = combineReducers({
    listingsRoot: listingsReducer
  });

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
