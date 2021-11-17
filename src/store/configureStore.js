import { configureStore } from "@reduxjs/toolkit";
// import countReducer from '../reducers/countReducers'
// import toDoReducer from "../reducers/todoReducers";
import rootReducer from '../reducers/index'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const can only be defined after all the imports
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
    })
    let persistor = persistStore(store)

    export {store, persistor}

// this is day 7 mobile


