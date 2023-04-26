const parsePokemonFromApi = (pokemonFromApi) => {
    return {
        // id: pokemonFromApi.id,
        name: pokemonFromApi.name,
        image: pokemonFromApi.sprites.front_default,
        backImage: pokemonFromApi.sprites.back_default,
        types: pokemonFromApi.types.map((elem) => elem.type.name),
        life: pokemonFromApi.stats[0].base_stat,
        attack: pokemonFromApi.stats[1].base_stat,
        defense: pokemonFromApi.stats[2].base_stat,
        speed: pokemonFromApi.stats[5].base_stat,
        height: pokemonFromApi.height,
        weight: pokemonFromApi.weight
    }
};

module.exports = parsePokemonFromApi;