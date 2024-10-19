// controllers/favoriteController.js
const favoriteModel = require('../models/favoriteModel');
const pokemonModel = require('../models/pokemonModel');

exports.addFavorite = async (req, res) => {
  try {
    const userId = req.userId;
    const { pokemonId } = req.body;

    // Verificar si el Pokémon existe en la base de datos
    const pokemon = await pokemonModel.findById(pokemonId);
    if (!pokemon) {
      return res.status(404).json({ message: 'Pokémon no disponible' });
    }

    // Verificar si el Pokémon ya está en favoritos
    const isAlreadyFavorite = await favoriteModel.isFavorite(userId, pokemonId);
    if (isAlreadyFavorite) {
      return res.status(400).json({ message: 'El Pokémon ya está en tus favoritos' });
    }

    // Agregar a favoritos
    await favoriteModel.add(userId, pokemonId);

    res.json({ message: 'Pokémon agregado a favoritos' });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar favorito', error: error.message });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const userId = req.userId;

    // Obtener los Pokémon favoritos del usuario
    const favorites = await favoriteModel.getFavoritesByUserId(userId);

    res.json({ favorites });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener favoritos', error: error.message });
  }
};

exports.removeFavorite = async (req, res) => {
  try {
    const userId = req.userId;
    const { pokemonId } = req.params;

    // Eliminar de favoritos
    await favoriteModel.remove(userId, pokemonId);

    res.json({ message: 'Pokémon eliminado de favoritos' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar favorito', error: error.message });
  }
};
