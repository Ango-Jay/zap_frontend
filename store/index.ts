import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storageSession from 'redux-persist/lib/storage/session';
import appSlice from './appSlice';


  const persistConfig = {
    key: 'ZAP_APP_STATE',
    storage: storageSession,
  };
  

  const rootReducer = combineReducers({
    appSlice
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  //  persisted store
  export const persistor = persistStore(store);
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>;
// Infer the type of makeStore
export type AppDispatch = typeof store.dispatch;
