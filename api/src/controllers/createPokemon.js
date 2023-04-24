const { Pokemon } = require('../db');

const createPokemon = async ({ name, image, life, attack, defense, speed, height, weight}) => {
    let nameMinus = name.toLowerCase();
    const pokemon = await Pokemon.create({
        name: nameMinus, image, life, attack, defense, speed, height, weight
    });
    return pokemon;
};

module.exports = createPokemon;