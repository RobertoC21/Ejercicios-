
import React, {useState, useEffect} from "react";
import PokemonCard from '../components/PokemonCard';
import AppNavbar from '../components/Navbar';
import{ getPokemonList } from '../services/api';
import { Container, Row } from 'react-bootstrap'; 


const PokemonList = () =>{
    const [pokemons, setpokemons] = useState ([]);

    useEffect(() =>{
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        const data = await getPokemonList();
        setpokemons(data);
    };

    return (
        <>
        <AppNavbar />
        <Container>
            <Row> 
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} name={pokemon.name} imageUrl={pokemon.imageUrl} />

                ))}
            </Row>
        </Container>
        </>
    );
};

export default PokemonList;

