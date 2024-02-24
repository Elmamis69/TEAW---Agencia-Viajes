// Importar la dependencia Sequelize
const { Sequelize } = require('sequelize'); 

// Crear una instancia de Sequelize para la conexión a la base de datos
//
//                                               Cambiar aqui  Y aquí
//                                               su nombre     su contraseña
//                                                local        de BD
const sequelize = new Sequelize('AgenciadeViajes', 'root', 'ja160418', {
  host: 'localhost',
  dialect: 'mysql',
});

// Exportar la instancia de Sequelize
module.exports = sequelize;
