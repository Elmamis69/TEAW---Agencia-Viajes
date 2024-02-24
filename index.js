// Importar los modelos Usuario, Destino y Publicacion  
const Usuario = require('./models/usuario');
const Destino = require('./models/destino');
const Publicacion = require('./models/publicacion');

// Importar la configuración de la base de datos
const sequelize = require('./config/database');

// Función para probar la conexión a la base de datos y sincronizar los modelos
async function iniciarProyecto() { 
  try {
    // Probar la conexión a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');

    // Sincronizar los modelos con la base de datos
    await sequelize.sync();
    console.log('Modelos sincronizados correctamente.');

  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

// Llamar a la función iniciarProyecto para iniciar el proyecto
iniciarProyecto();
