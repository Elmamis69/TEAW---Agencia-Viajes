'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResenaLugar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResenaLugar.init({
    NombreLugar: DataTypes.STRING,
    Calificacion: DataTypes.INTEGER,
    Fecha: DataTypes.DATE,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ResenaLugar',
  });
  return ResenaLugar;
};