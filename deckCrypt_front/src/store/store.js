import storage from "redux-persist/lib/storage"
import {persistStore, persistReducer} from "redux-persist"
import {combineReducers, configureStore} from "@reduxjs/toolkit"


import { userSlice } from "@store/userSlice"



// const userPersistConfig = {
//      key: "user",
//      storage,
//      whitelist: ['reducer1', 'reducer2'],
//      blacklist: ['reducerToExclude'],
// }

const userPersistConfig = {
     key: "userState",
     storage,
}

const rootReducer = combineReducers({
    // routerState: routerSlice.reducer,
    userState: persistReducer(userPersistConfig, userSlice.reducer),
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({   
        immutableCheck: false, 
        serializableCheck: false
    })
})

export const persistor = persistStore(store)
