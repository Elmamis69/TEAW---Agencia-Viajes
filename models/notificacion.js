'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Notificacion extends Model {}

Notificacion.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipoActividad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuarioDestinatario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaHora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Notificacion',
});

module.exports = Notificacion;
