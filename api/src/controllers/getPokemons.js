const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;
const { Pokemon } = require('../db');
const {Op} = require('sequelize');


const getPokemons = (req, res) => {
    const { name } = req.query;
    if (name !== undefined) {
        res.send(`Quiero buscar todos los que se llamen ${name}`);
    } else {
        res.send(`Quiero enviar todos los pokemons`);
    };
}

const getPokemonByName = async (name) => {
    let nameMinus = name.toLowerCase();
    const url = `${API_URL}/pokemons/${name}`;
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