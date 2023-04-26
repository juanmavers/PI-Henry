const { Router } = require('express');
const { getPokemonById, getPokemons } = require("../controllers/getPokemons");
const createPokemon = require('../controllers/createPokemon');

const pokemonsRouter = Router();

pokemonsRouter.get("/", async (req, res) => {
    const pokemons = await getPokemons(req.query.name, req.query.pageNumber, req.query.orderBy, req.query.sortBy, req.query.created, req.query.type);
    res.send(pokemons);
});

pokemonsRouter.get("/:id", async (req, res) => {
    const pokemon = await getPokemonById(req.params.id);
    res.send(pokemon);
});

pokemonsRouter.post("/", async (req, res) => {
    console.log("creating new pokemon!!!");
    const pokemon = await createPokemon(req.body);
    res.send(pokemon);
});

module.exports = pokemonsRouter;