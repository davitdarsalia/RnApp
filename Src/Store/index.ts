import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './Reducers/authReducer';
import feedReducer from './Reducers/feedReducer';

const rootReducer = combineReducers({
    feedReducer,
    authReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
