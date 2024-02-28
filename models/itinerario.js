'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itinerario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      itinerario.hasMany(models.comentarioItinerario,{foreignKey:"iditinerario"})
      itinerario.hasMany(models.horario,{foreignKey:"iditinerario"})
    }
  }
  itinerario.init({
    lugaresEspecificos: DataTypes.STRING,
    VinculoDeViaje: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'itinerario',
  });
  return itinerario;
};