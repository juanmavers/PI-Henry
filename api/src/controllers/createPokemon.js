const { Pokemon, Type } = require('../db');

const createPokemon = async ({ name, image, life, attack, defense, speed, height, weight, types}) => {
    let nameMinus = name.toLowerCase();
    const pokemon = await Pokemon.create({
        name: nameMinus, image, backImage: image, life, attack, defense, speed, height, weight, created: true
    });

    for (const type of types) {
        const typeDb = await Type.findOne({
            where: {
                id: type.id
            }
        })
        await pokemon.addType(typeDb);
    }
    return pokemon;
};

module.exports = createPokemon;