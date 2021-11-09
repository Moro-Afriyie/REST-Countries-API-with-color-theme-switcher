import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWare = [thunk];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
