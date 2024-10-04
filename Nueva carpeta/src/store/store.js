// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import itemReducer from './slices/itemSlice';

// Configurar el store global de Redux
const store = configureStore({
  reducer: {
    counter: counterReducer, // Slice para manejar el contador
    items: itemReducer,      // Slice para manejar la lista de items
  },
});

export default store;
