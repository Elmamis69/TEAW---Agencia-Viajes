'use strict';
const{
  Model
}=require('sequelize');
module.exports=(sequelize,DataTypes)=>{
// Definir el modelo Usuario
class Destino extends Model {

static associate(models){
  Destino.hasMany(models.Publicacion, {
    foreignKey:'idPublicacion'
  });
  Destino.hasMany(models.resenaLugar, {
    foreignKey:'idResenaLugar'
  });
}
}
Destino.init({
  nombreDestino: DataTypes.STRING,
  descripcion: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Destino',
});
return Destino;
};
