const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // backImage: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: '',
    // },
    life: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    attack: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    defense: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    speed: {
      type: DataTypes.DECIMAL,
    },
    height: {
      type: DataTypes.DECIMAL,
    },
    weight: {
      type: DataTypes.DECIMAL,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },{timestamps: false});
};

