// Importar el modelo Usuario
const { Usuario } = require('../models/usuario');

class UsuarioDAO {
  async create(nombreUsuario, correo, clave) {
    // Crea un nuevo usuario con los datos proporcionados
    const usuario = await Usuario.create({
      nombreUsuario,
      correo,
      clave,
    });

    return usuario;
  }

  async getAll() {
    // Obtiene todos los usuarios
    const usuarios = await Usuario.findAll();

    return usuarios;
  }

  async getById(id) {
    // Obtiene un usuario por su ID
    const usuario = await Usuario.findByPk(id);

    return usuario;
  }

  async update(id, nombreUsuario, correo, clave) {
    // Actualiza un usuario por su ID
    const [updatedRows] = await Usuario.update(
      {
        nombreUsuario,
        correo,
        clave,
      },
      {
        where: {
          id,
        },
      }
    );

    if (updatedRows === 0) {
      throw new Error('Usuario no encontrado');
    }

    const usuarioUpdated = this.getById(id);

    return usuarioUpdated;
  }

  async delete(id) {
    // Elimina un usuario por su ID
    const usuario = await this.getById(id);

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    await usuario.destroy();

    return usuario;
  }
}

module.exports = new UsuarioDAO();