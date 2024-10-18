const favoriteModel = require('.../models/favoriteModel');
const pokemonModel = require('.../models/pokemonModel');

exports.addFavorite = async (req, res) => {

    try {

        const userId = req.userId;
        const {pokemonId } = req.body;
        

        //verificar si el pokemon esta en la base de daos 
        const pokemon = await pokemonModel.findById(pokemonId);
        if (!pokemon){
            return res.status(404).json({ message: 'pokemon no disponible '});
        }

        //verificar si e ppokemon ya esta en favoritos

        const isAlreadyFavorite = await favoriteModel.isAlreadyFavorite(userId, pokemonId);
        if (isAlreadyFavorite) {
            return res.status(400).json ({message: 'el pokemon ya esta en tus favoritos' });
        }

        //agregar a favoritos

        await favoriteModel.add(userId,pokemonId);
        res.json({ message: 'Pokemon agregado a favoritos'});
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar a favorito', error: error.message });
    }
    
};


exports.getFavorites =async (req, res) => {
    try {

        const userid =req.userId;

        //obtener ls pokemones favoritos del usuario
        const favorites = await favoriteModel.getFavoritesByuserId(userid);
        res.json({ favorites });
        
    } catch (error) {
        res.status(500).json({ message: 'error al obtener favoritos', error: error.message});
    }
    
}



//eliminando los favoritos del db

exports.removeFavorite = async (req, res) => {
    try {

        const userId = req.userId;
        const {pokemonId } = req.params;
        
        await favoriteModel.remove(userId,pokemonId);
        res.json({ message: 'Pokemon eliminado de favoritos' });
    } catch (error) {
        res.status(500).json({ message:'error al eliminar favoritos', error: error.message });
        
    }

};