export const getPokemonList = async () => {
try {
    const reponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await reponse.json();
    return data.results.map((pokemon, index) => ({
        name: pokemon.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }));
}catch (error){

    console.error('Error con el api: ', error);
    return [];
}
};
