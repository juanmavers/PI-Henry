const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;
const parsePokemonFromApi = require('../helpers/parsePokemon');

const populateDb = async (Pokemon, Type) => {
    try {
        const response = await axios.get(`${API_URL}/type`);
        console.log("populating types");
        console.log(response.data);
        const typeNames = response.data.results.map(type => {
            return {
                name: type.name
            }
        });
        console.log("typeNames");
        console.log(typeNames);
        await Type.bulkCreate(typeNames);
    }catch(error){
        console.error("Error llenando base de datos con types", error.message)
    }

    const typesitos = await Type.findAll();
    console.log("typesitos");
    console.log(typesitos);

    try {
        const response = await axios.get(`${API_URL}/pokemon?limit=60`);
        const promises = [];
        for (const pokemon of response.data.results) {
            const responsePokemon = axios.get(pokemon.url);
            promises.push(responsePokemon);
        }
        const results = await Promise.all(promises);
        for (const result of results) {
            const parsedPokemon = parsePokemonFromApi(result.data);
            const types = await Type.findAll({
                where: {
                    name: parsedPokemon.types
                }
            });
            const pokemon = await Pokemon.create(parsedPokemon);
            for (const type of types) {
                await pokemon.addType(type);
            }
        }
        // const pokemons = results.map((result) => parsePokemonFromApi(result.data));
        // await Pokemon.bulkCreate(pokemons);
    }catch(error){
        console.error("Error llenando base de datos con pokemons", error.message)
    }
};

module.exports = populateDb;