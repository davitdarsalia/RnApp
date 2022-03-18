import {AuthReducer} from './Reducers/Auth';
import {PersistGate} from 'redux-persist/integration/react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer, Storage} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import {RootStateOrAny} from 'react-redux';

const persistConfig: {
   key: string;
   storage: Storage;
   whitelist?: string[];
   transforms?: Array<any>;
} = {
   key: 'root',
   storage: AsyncStorage,
};

const mainReducer = combineReducers({
   auth: AuthReducer,
});

const rootReducer = (state: RootStateOrAny, action: any) => {
   return mainReducer(state, action);
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(ReduxThunk);

const store = createStore(pReducer, composeWithDevTools(middleware));

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
