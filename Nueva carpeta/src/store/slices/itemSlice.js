// src/store/slices/itemSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para la lista de items
const initialState = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

// Crear el slice para la lista de items
const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // Acción para establecer una nueva lista de items
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

// Exportar acciones para usarlas en los componentes
export const { setItems } = itemSlice.actions;

// Exportar el reducer para agregarlo al store
export default itemSlice.reducer;
