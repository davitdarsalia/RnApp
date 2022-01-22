import {AuthActions} from '../Types/AuthTypes';

const initialState = {
    loginData: null,
    registerData: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActions.LOGIN_REQUEST:
            return state;
        case AuthActions.LOGIN_SUCCESS:
            return state;
        case AuthActions.LOGIN_FAILURE:
            return state;
        default:
            return state;
    }
};
