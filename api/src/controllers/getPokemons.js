const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;
const { Pokemon } = require('../db');


const getPokemons = async () => {
        //recibe nro de pagina para matchear al paginado 
        
        const pageSize = 10;
        const pokemonDb = await Pokemon.findAll({ limit: pageSize, offset: 0 });

        return (pokemonDb);
}

const getPokemonByName = async (req, res, pokemon) => {
    let nameMinus = pokemon.toLowerCase();

        const response = await axios.get(`${API_URL}/pokemon/${nameMinus}`);
        const pokemonsDb = await Pokemon.findAll({
            where: {
                name: nameMinus,
            }
        });
        const pokemons = [...pokemonsDb, response.data];
        return pokemons;

    }

    const getPokemonById = async (id) => {
        const url = `${API_URL}/pokemons/${id}`;

        const response = await axios.get(`${API_URL}/pokemon/${id}`);

        return response.data;
    }


    module.exports = { getPokemons, getPokemonById, getPokemonByName };