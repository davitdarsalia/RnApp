import {UserAction} from './../Types/ActionTypes';
import {AuthActions} from '../Types/AuthTypes';

const initialState = {
    loginData: null,
    registerData: null,

    loading: false,

    errors: null,
};

export const userReducer = <K>(
    state = initialState,
    action: UserAction<any>,
) => {
    switch (action.type) {
        case AuthActions.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                errors: null,
            };
        case AuthActions.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                errors: null,
                registerData: {
                    action,
                },
            };
        case AuthActions.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            };
        default:
            return state;
    }
};
