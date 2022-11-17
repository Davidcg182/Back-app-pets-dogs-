const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'undefined'
    },
    origin: {
      type: DataTypes.STRING,
      defaultValue: 'undefined'
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: "https://www.tododisca.com/wp-content/uploads/2021/10/perro-enfermedad-1140x703.jpg"
    }
  });
};
