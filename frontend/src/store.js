import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {messageReducer} from "./reducers/messageReducer.js";
import {filterReducer} from "./reducers/filterReducer.js"

const reducer = combineReducers({
  messageReducer,
  filterReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store