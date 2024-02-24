// Importar las dependencias necesarias 
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Destino = require('./destino');

// Definir la clase Publicacion
class Publicacion extends Model {}

Publicacion.init({
  // Definir los campos del modelo Publicacion
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaHora: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Publicacion',
});

// Definir las relaciones con otras clases
Publicacion.belongsTo(Usuario, { as: 'autor' });
Publicacion.belongsTo(Destino, { as: 'destino' });

// Exportar la clase Publicacion
module.exports = Publicacion;
