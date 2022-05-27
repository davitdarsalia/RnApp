import { AuthReducer } from "./Reducers/AuthReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

export const RootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof RootReducer>;
