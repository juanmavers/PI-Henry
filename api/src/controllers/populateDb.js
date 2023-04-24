const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;
// const { Pokemon } = require('../db');
const parsePokemonFromApi = require('../helpers/parsePokemon');

const populateDb = async (Pokemon) => {
    
    console.log("populating");
    const response = await axios.get(`${API_URL}/pokemon?limit=30`);
    const promises = [];
    for (const pokemon of response.data.results) {
        console.log("fetching pokemon", pokemon.name);
        const responsePokemon = axios.get(pokemon.url);
        promises.push(responsePokemon);
        // await Pokemon.create(parsePokemonFromApi(responsePokemon.data));
    }
    const results = await Promise.all(promises); 
    const pokemons = results.map((result) => parsePokemonFromApi(result.data));
    await Pokemon.bulkCreate(pokemons);
}

module.exports = populateDb;