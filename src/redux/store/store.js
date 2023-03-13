import {createStore} from 'redux'
import rootReducer from '../reducer/rootReducer'
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'persistKey' ,
    storage
}

let persistreducer = persistReducer(persistConfig , rootReducer);
const store = createStore(persistreducer);
const persister = persistStore(store);

export default store;
export {persister};

