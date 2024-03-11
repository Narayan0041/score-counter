import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage for React Native

import rootReducer from "./Reducer/index"; // Import your root reducer

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // AsyncStorage for React Native
  // Other configurations if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);