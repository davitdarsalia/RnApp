import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";
import { AuthActions, UserAuthActions } from "../Types/Auth/AuthTypes";
import axios from "axios";

export const AuthenticateUser = () => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/sign-in",
        {
          username: "davit.darsalia",
          password: "David.1998!",
        }
      );

      dispatch({
        type: AuthActions.AuthSuccess,
        payload: {
          UserID: "",
          accessToken: "",
          accessTokenExp: "",
          RefreshToken: "",
          RefreshTokenExp: "",
          loading: false,
          errorMessage: "",
        },
      });
    } catch (error) {
      dispatch({
        type: AuthActions.AuthFailure,
        payload: {
          errorMessage: "",
        },
      });
    }
  };
};
