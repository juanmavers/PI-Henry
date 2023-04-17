const { Router } = require('express');
const { getPokemons, getPokemonById, getPokemonByName }  = require("../controllers/getPokemons");
const createPokemon = require('../controllers/createPokemon');

const pokemonsRouter = Router();

pokemonsRouter.get("/", async(req, res) => {
    if(req.query.name){
        const pokemon = await getPokemonByName(req.query.name);
        res.send(pokemon);
    } else {
        res.send(`Estoy en Pokemons`);
    }
});

// pokemonsRouter.get("/:name", async (req, res) => {
//     console.log("dentro de name");
//     const pokemon = await getPokemonByName(req.params.name);
//     res.send(pokemon);
// });

pokemonsRouter.get("/:id", async (req, res) => {
    console.log("dentro de id");
    const pokemon = await getPokemonById(req.params.id);
    res.send(pokemon);
});

pokemonsRouter.post("/", async (req, res) => {
    const pokemon = await createPokemon(req.body);
    res.send(pokemon);
  });

module.exports = pokemonsRouter;