require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const populateDb = require('./controllers/populateDb');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false,
      native: false,
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });


modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);


const { Pokemon, Type } = sequelize.models;

populateDb(Pokemon, Type);

Pokemon.belongsToMany(Type, {as: "types", through: 'pokemon_type', timestamps: false });
Type.belongsToMany(Pokemon, {as: "pokemons", through: 'pokemon_type', timestamps: false });

module.exports = {
   ...sequelize.models, 
   conn: sequelize, 
};
