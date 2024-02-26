'use strict';
const{
  Model
}=require('sequelize');
module.exports=(sequelize,DataTypes)=>{
// Definir el modelo Usuario
class resenaLugar extends Model {

static associate(models){
  resenaLugar.hasMany(models.Usuario, {
    foreignKey:'idUsuario'
  });
  resenaLugar.hasMany(models.Destino, {
    foreignKey:'idDestino'
  });
}
}
resenaLugar.init({
  nombreLugar: DataTypes.STRING,
  calificacion: DataTypes.INTEGER,
  comentario:DataTypes.TEXT,
  fecha: DataTypes.DATE
}, {
  sequelize,
  modelName: 'resenaLugar',
});
return resenaLugar;
};
