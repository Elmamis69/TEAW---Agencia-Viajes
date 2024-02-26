const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('nombre_basedatos', 'root', 'ja160418', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Puedes cambiar esto a true para ver los registros de las consultas en la consola
});

// Importar modelos
const Usuario = require('../models/usuario');
const Publicacion = require('../models/publicacion');
const Destino = require('../models/destino');

// Definir relaciones entre modelos
Usuario.hasMany(Publicacion);
Publicacion.belongsTo(Usuario);

Publicacion.belongsTo(Destino);
Destino.hasMany(Publicacion);

// Exportar instancia de Sequelize y modelos
module.exports = { sequelize, Usuario, Publicacion, Destino };
