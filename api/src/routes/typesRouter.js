const { Router } = require('express');
const {getTypes} = require('../controllers/getPokemonTypes');

const typesRouter = Router();

typesRouter.get("/", async (req, res) => {
  const types = await getTypes();
  res.send(types);
}); 

module.exports = typesRouter;