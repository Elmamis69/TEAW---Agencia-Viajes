// Importar las dependencias necesarias 
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

// Definir la clase Destino
class Destino extends Model {}

Destino.init({
  // Definir los campos del modelo Destino
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  fotos: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Destino',
});

// Exportar la clase Destino
module.exports = Destino;
