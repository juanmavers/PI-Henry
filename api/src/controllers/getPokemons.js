const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;
const { Pokemon, Type } = require('../db');
const { Op } = require('sequelize');

const getPokemons = async (name = '', pageNumber = 0, orderBy = "name", sortBy = "DESC", created = "all", type = "all") => {
    const pageSize = 12;
    try {

        let where = {};
        let includeType = {
            model: Type,
            where: {},
            attributes: ["id", "name"]
        };

        if (name && name.length > 0) {
            where.name = {
                [Op.substring]: name.toLowerCase(),
            };
        }
        if (created === "local") {
            where.created = true;
        } else if (created === "api") {
            where.created = false;
        }

        if (type !== "all") {
            includeType.where.id = type;
        }

        const pokemonDb = await Pokemon.findAll(
            {
                order: [[orderBy, sortBy]],
                limit: pageSize,
                offset: pageSize * pageNumber,
                where: where,
                include: [includeType],
            });
        const pokemonCount = await Pokemon.count();
        return {
            items: pokemonDb,
            totalPages: Math.ceil(pokemonCount / pageSize)
        };
    } catch (error) {
        throw new Error(`Error al buscar los pokemones en la base de datos: ${error.message}`);
    }
}

const getPokemonById = async (id) => {
    try {
        const pokemon = await Pokemon.findOne({
            where: {
                id: id,
            }
        });
        return pokemon;
    } catch (error) {
        throw new Error(`Error al buscar el pokemon por Id: ${error.message}`);
    }
}



module.exports = { getPokemons, getPokemonById };