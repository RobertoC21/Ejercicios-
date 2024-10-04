// src/store/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para los contadores
const initialState = {
  count: 0,
  num: 1,
};

// Crear el slice para el contador
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Acción para incrementar el contador 'count'
    incrementCount: (state) => {
      state.count += 1;
    },
    // Acción para incrementar el contador 'num'
    incrementNum: (state) => {
      state.num += 1;
    },
  },
});

// Exportar acciones para usarlas en los componentes
export const { incrementCount, incrementNum } = counterSlice.actions;

// Exportar el reducer para agregarlo al store
export default counterSlice.reducer;
