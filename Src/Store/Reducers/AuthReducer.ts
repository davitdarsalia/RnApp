import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../Types/Auth/AuthTypes";

const initialState: UserState = {
  UserID: "",
  accessToken: "",
  accessTokenExp: "",
  RefreshToken: "",
  RefreshTokenExp: "",
  loading: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading;
    },
    loginSuccess: (state, action: PayloadAction<UserState>) => {
      state.loading = false;
      state = action.payload;
    },
    loginFailure: (state, action: PayloadAction<UserState>) => {
      state.loading = false;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});
