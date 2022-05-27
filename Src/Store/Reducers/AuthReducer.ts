import { AuthActions } from "./actionTypes";
import { UserAuthActions, UserState } from "../Types/Auth/AuthTypes";

const initialState: UserState = {
  UserID: "",
  accessToken: "",
  accessTokenExp: "",
  RefreshToken: "",
  RefreshTokenExp: "",
  loading: false,
  errorMessage: "",
};

export const AuthReducer = (state = initialState, action: UserAuthActions) => {
  switch (action.type) {
    case AuthActions.AuthRequest:
      return { ...state, loading: true, error: false };
    case AuthActions.AuthSuccess:
      return {
        ...state,
        UserID: action.payload.UserID,
        accessToken: action.payload.accessToken,
        accessTokenExp: action.payload.accessTokenExp,
        RefreshToken: action.payload.RefreshToken,
        RefreshTokenExp: action.payload.RefreshTokenExp,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };
    case AuthActions.AuthFailure:
      return {
        ...state,
        loading: false,
        error: action.payload.errorMessage,
      };
    default:
      return { ...state };
  }
};
