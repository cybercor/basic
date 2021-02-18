import {createStore} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from '../Reducer/index';

const persistConfig={
    key:'root',
    storage:storage,
}

const pReducer=persistReducer(persistConfig,reducer)

export const store=createStore(pReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor=persistStore(store);