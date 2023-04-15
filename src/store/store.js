import { legacy_createStore as createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const middleware=[thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
