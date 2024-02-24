// Importar las dependencias necesarias 
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

// Definir el modelo Usuario
class Usuario extends Model {}

Usuario.init({
  // Definir los campos del modelo Usuario
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  //Cambiar nombre de variables si gustan
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //Cambiar nombre de variables si gustan
  correoElectronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  //Cambiar nombre de variables si gustan
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Usuario',
});

// Exportar el modelo Usuario
module.exports = Usuario;
