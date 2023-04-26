const { Pokemon } = require('../db');

const createPokemon = async ({ name, image, life, attack, defense, speed, height, weight}) => {
    let nameMinus = name.toLowerCase();
    const pokemon = await Pokemon.create({
        name: nameMinus, image, life, attack, defense, speed, height, weight, created: true
    });
    console.log("new pokemon!!!");
    console.log(pokemon);

    // for (const type of types) {
    //     console.log("adding type!!!");
    //     await pokemon.addType(type);
    // }
    return pokemon;
};

module.exports = createPokemon;