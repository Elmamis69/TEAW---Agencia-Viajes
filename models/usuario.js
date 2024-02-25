'use strict';
const{
  Model
}=require('sequelize');
module.exports=(sequelize,DataTypes)=>{
// Definir el modelo Usuario
class Usuario extends Model {

static associate(models){
  Usuario.hasMany(models.Publicacion, {
    foreignKey:'idUsuario'
  });
}
}
Usuario.init({
  nombreUsuario: DataTypes.STRING,
  correo: DataTypes.STRING,
  clave: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Usuario',
});
return Usuario;
};
