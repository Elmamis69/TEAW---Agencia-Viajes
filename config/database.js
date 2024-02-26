// Importar la dependencia Sequelize
const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
// Recuerda reemplazar 'nombre_basedatos', 'root' y 'ja160418' con los valores correspondientes de tu base de datos MySQL
const sequelize = new Sequelize('nombre_basedatos', 'root', 'ja160418', {
  host: 'localhost',
  dialect: 'mysql',
});

// Importar los modelos
const UsuarioModel = require('../models/usuario');
const PublicacionModel = require('../models/publicacion');
const DestinoModel = require('../models/destino');
const ResenaLugarModel = require('../models/resenaLugar');
const ItinerarioModel = require('../models/itinerario');
const NotificacionModel = require('../models/notificacion');

// Inicializar los modelos con la conexión Sequelize
const Usuario = UsuarioModel(sequelize, Sequelize);
const Publicacion = PublicacionModel(sequelize, Sequelize);
const Destino = DestinoModel(sequelize, Sequelize);
const ResenaLugar = ResenaLugarModel(sequelize, Sequelize);
const Itinerario = ItinerarioModel(sequelize, Sequelize);
const Notificacion = NotificacionModel(sequelize, Sequelize);

// Definir las asociaciones entre los modelos
Usuario.associate(sequelize.models);
Publicacion.associate(sequelize.models);
Destino.associate(sequelize.models);
ResenaLugar.associate(sequelize.models);
Itinerario.associate(sequelize.models);
Notificacion.associate(sequelize.models);

// Exportar la instancia de Sequelize
module.exports = sequelize;
