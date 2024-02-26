'use strict';
const{
  Model
}=require('sequelize');
module.exports=(sequelize,DataTypes)=>{
// Definir el modelo Usuario
class Publicacion extends Model {

static associate(models){
  Publicacion.belongsTo(models.Usuario, {
    foreignKey:'idUsuario'
  });
  Publicacion.belongsTo(models.Destino, {
    foreignKey:'idDestino'
  });
}
}
Publicacion.init({
  contenido: DataTypes.TEXT,
  ubicacion:DataTypes.STRING,
  fecha:DataTypes.DATE
}, {
  sequelize,
  modelName: 'Publicacion',
});
return Publicacion;
};
