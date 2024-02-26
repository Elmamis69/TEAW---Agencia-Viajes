'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // Definir el modelo Itinerario
  class Itinerario extends Model {
    static associate(models) {
      // Definir las asociaciones con otros modelos si es necesario
    }
  }

  // Inicializar el modelo Itinerario
  Itinerario.init({
    actividades: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horarios: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lugaresEspecificos: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comentarios: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Itinerario',
  });

  return Itinerario;
};
