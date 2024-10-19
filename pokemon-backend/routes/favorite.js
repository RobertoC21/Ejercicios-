// routes/favorite.js
const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');
const { verifyToken } = require('../middleware/auth');

// Obtener favoritos del usuario
router.get('/', verifyToken, favoriteController.getFavorites);

// Agregar a favoritos
router.post('/', verifyToken, favoriteController.addFavorite);

// Eliminar de favoritos
router.delete('/:pokemonId', verifyToken, favoriteController.removeFavorite);

module.exports = router;
