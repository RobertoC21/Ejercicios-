const axios = require('axios');
const pokemonModel = require('../models/pokemonModel');


//OBTENCION DE LOS POKEMONES AGREGADOS POR EL ADMIN

exports.getPokemon = async (req, res) => {
    try {
        const pokemons = await pokemonModel.getAll();
        res.json({pokemons})
    } catch (error) {
        res.status(500).json({message: 'Error al obtener pokmemons', error: error.message});
        
   }
    
};

//agregar un pokemon a la base de datos (solo admin)

exports.addPokemon = async (req, res) => {
    try {
        const { nameOrId } =req.body;
        //verificar si el pokmeon ya existe en la base de datos
        const exists = await pokemonModel.exists(nameOrId);
        if (exists) {
            return res.status(400).json({ message: 'el pokemon ya ha sido agregado'});
        } 
        //obtener los detalles desde la API 

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/${nameOrbId}');
        const data = response.data;

        //prerpara datos del pokemon 
        const pokemonData = {
            id_pokemon: data.id,
            nombre: data.name,
            tipo: data.types.map(t => t.type.name).join(', '),
            imagen_url: data.sprites.front_default,
        };

        //agregar a la tabla de las base de datos
        await pokemonModel.create(
            pokemonData.id_pokemon,
            pokemonData.nombre,
            pokemonData.tipo,
            pokemonData.imagen_url
        );

        return res.status(201).json({ message: 'Pokemon agregado', pokemon: pokemonData});
    } catch (error) {
        if (error.response && error.response.status === 404) {
        res.status(404).json({ message: 'Pokemon no enontrado en la pokeApi'});
            
        } else {
        res.status(500).json({ message: 'ERROR AL AGREGAR POKEMON', error: error.message});
            
        }
    }
    
};

//eliminar un pokemon de la base de datos (solo admin)
exports.deletePokemon = async (req, res) => {
    try { 

        const{ id } = req.params;

        //verificar si el pokemons
        const pokemon = await pokemonModel.findById(id);
        if (!pokemon) {
          return res.status(404).json({ message: 'Pokémon no encontrado' });
        }

        //eliminar el pokemon
        await pokemonModel.delete(id);

        res.json({message: 'Eliminado el pokemon'});
        
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar Pokémon', error: error.message });
    }
    
};

// Obtener los detalles del pokemon

exports.getPokemonDetails = async (req, res) => {

    try {
        const { id } = req.params;

        //buscar el pokemon en la base de datos 

        const pokemon = await pokemonModel.findById(id);
        if (!pokemon) {
            return res.status(404).json({ message: 'Pokémon no encontrado' });
        }

        res.json({ pokemon });

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener detalles del Pokémon', error: error.message });
    }
};
