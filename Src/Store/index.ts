import {applyMiddleware, createStore} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';

import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {RootReducer} from './Reducers/RootReducer';

const slice = createFilter('root', [
    /*
        Include Slices Here, F. E

        'auth.permissions'
    */
]);

const PersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // Persist Reducers Goes Here
    whiteList: [],
    // Slices Of Persist Reducer Goes Here
    transfroms: [],
};

const persistorReducer = persistReducer(PersistConfig, RootReducer);

const store = createStore(persistorReducer, applyMiddleware(logger, thunk));
const persistor = persistStore;

// Type For Custon App Dispatch
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export {store, persistor};
