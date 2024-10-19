// routes/pokemon.js
const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Obtener todos los Pokémon disponibles
router.get('/', pokemonController.getPokemons);

// Obtener detalles de un Pokémon
router.get('/:id', pokemonController.getPokemonDetails);

// Agregar un Pokémon (solo admin)
router.post('/', verifyToken, isAdmin, pokemonController.addPokemon);

// Eliminar un Pokémon (solo admin)
router.delete('/:id', verifyToken, isAdmin, pokemonController.deletePokemon);

module.exports = router;
