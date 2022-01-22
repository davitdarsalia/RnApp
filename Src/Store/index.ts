import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './Reducers/authReducer';

export const store = createStore(authReducer, applyMiddleware(thunk));
