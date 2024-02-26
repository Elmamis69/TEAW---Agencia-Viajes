// Importar la instancia de Sequelize y los modelos desde database.js
const sequelize = require('./config/database');
const { Usuario, Publicacion, Destino, ResenaLugar, Itinerario, Notificacion } = sequelize.models;

// Sincronizar los modelos con la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');

    // Sincronizar modelos con la base de datos
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al conectar y sincronizar con la base de datos:', error);
  }
})();
