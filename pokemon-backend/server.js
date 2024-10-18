// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Importar rutas
const authRoutes = require('./routes/auth');
const pokemonRoutes = require('./routes/pokemon');
const favoriteRoutes = require('./routes/favorite');

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/pokemons', pokemonRoutes);
app.use('/api/favorites', favoriteRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
