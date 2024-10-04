// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Importar el store configurado
import App from './App';
import './index.css'; // Importar estilos globales

// Usar Provider para envolver la aplicación y proveer el store de Redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
