const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;
const parsePokemonFromApi = require('../helpers/parsePokemon');

const populateDb = async (Pokemon) => {
    
    const response = await axios.get(`${API_URL}/pokemon?limit=60`);
    const promises = [];
    for (const pokemon of response.data.results) {
        const responsePokemon = axios.get(pokemon.url);
        promises.push(responsePokemon);
    }
    const results = await Promise.all(promises); 
    const pokemons = results.map((result) => parsePokemonFromApi(result.data));
    await Pokemon.bulkCreate(pokemons);
}

module.exports = populateDb;