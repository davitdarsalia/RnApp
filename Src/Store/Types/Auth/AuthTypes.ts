export enum AuthActions {
  AuthRequest = "AUTH_REQUEST",
  AuthSuccess = "AUTH_SUCCESS",
  AuthFailure = "AUTH_FAILURE",
}

export interface UserActionType {
  type: string;
  payload?: any;
}

// Payload Types

export type UserAuthActions =
  | UserAuthRequest
  | UserAuthSuccess
  | UserAuthFailure;

export interface UserAuthRequest {
  type: AuthActions.AuthRequest;
}
export interface UserAuthSuccess {
  type: AuthActions.AuthSuccess;
  payload: {
    UserID: string;
    accessToken: string;
    accessTokenExp: string;
    RefreshToken: string;
    RefreshTokenExp: string;
    loading: boolean;
    errorMessage: string;
  };
}
export interface UserAuthFailure {
  type: AuthActions.AuthFailure;
  payload: {
    errorMessage: string;
  };
}

// Initial State
export interface UserState {
  UserID: string;
  accessToken: string;
  accessTokenExp: string;
  RefreshToken: string;
  RefreshTokenExp: string;
  loading: boolean;
  errorMessage: string | boolean;
}
