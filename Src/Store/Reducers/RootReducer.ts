import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer';

export const RootReducer = combineReducers({
    auth: authReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
