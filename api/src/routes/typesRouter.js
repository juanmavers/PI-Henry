const { Router } = require('express');
const {getTypesById, getTypesByName} = require('../controllers/getPokemonTypes');

const typesRouter = Router();

typesRouter.get("/", (req, res) => {
  res.send(`Estoy en types`);
}); 


typesRouter.get("/:id", async (req, res) => {
  const type = await getTypesById(req.params.id);
  res.send(type);
}); 

typesRouter.get("/:name", async (req, res) => {
  const type = await getTypesByName(req.params.name);
  res.send(type);
}); 

module.exports = typesRouter;