const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;
const { Pokemon } = require('../db');


const getPokemons = async (pageNumber = 0) => {
        //recibe nro de pagina para matchear al paginado 
        
        const pageSize = 12;
        const pokemonDb = await Pokemon.findAll({ limit: pageSize, offset: pageSize * pageNumber });
        return (pokemonDb);
}

const getPokemonByName = async (pokemon) => {
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
        
        const pokemonsDb = await Pokemon.findAll({
            where: {
                id: id,
            }
        });
        if (pokemonsDb.length !== 0){
            return pokemonsDb[0];
        }
        const response = await axios.get(`${API_URL}/pokemon/${id}`);

        return response.data;
    }


    module.exports = { getPokemons, getPokemonById, getPokemonByName };