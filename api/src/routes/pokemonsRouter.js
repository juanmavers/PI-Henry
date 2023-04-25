const { Router } = require('express');
const { getPokemonById, getPokemonByName, getPokemons } = require("../controllers/getPokemons");
const createPokemon = require('../controllers/createPokemon');

const pokemonsRouter = Router();

pokemonsRouter.get("/", async (req, res) => {
    if (req.query.name) {
        const pokemon = await getPokemonByName(req.query.name);
        res.send(pokemon);
    } else {
        const pokemons = await getPokemons(req.query.pageNumber);
        res.send(pokemons);
    }
});

pokemonsRouter.get("/:id", async (req, res) => {
    const pokemon = await getPokemonById(req.params.id);
    res.send(pokemon);
});

pokemonsRouter.post("/", async (req, res) => {
    const pokemon = await createPokemon(req.body);
    res.send(pokemon);
});

module.exports = pokemonsRouter;