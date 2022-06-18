import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { authSlice } from "./Reducers/AuthReducer";

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  // Apply list of middlewares
  middleware: new MiddlewareArray().concat(logger),
});

// Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
