import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Reducers
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
  appReducer,
});

// Async middleware thunk
let store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export default store;
