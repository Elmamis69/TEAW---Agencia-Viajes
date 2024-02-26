// Importar los modelos Publicacion, Usuario y Destino
const { Publicacion, Usuario, Destino } = require('../models');

class PublicacionDAO {
  async create(idUsuario, idDestino, contenido, ubicacion, fecha) {
    // Crea una nueva publicación con los datos proporcionados
    const publicacion = await Publicacion.create({
      idUsuario,
      idDestino,
      contenido,
      ubicacion,
      fecha,
    });

    return publicacion;
  }

  async getAll() {
    // Obtiene todas las publicaciones
    const publicaciones = await Publicacion.findAll({
      include: [
        {
          model: Usuario,
          attributes: ['nombreUsuario'],
        },
        {
          model: Destino,
          attributes: ['nombreDestino'],
        },
      ],
    });

    return publicaciones;
  }

  async getById(id) {
    // Obtiene una publicación por su ID
    const publicacion = await Publicacion.findByPk(id, {
      include: [
        {
          model: Usuario,
          attributes: ['nombreUsuario'],
        },
        {
          model: Destino,
          attributes: ['nombreDestino'],
        },
      ],
    });

    return publicacion;
  }

  async update(
    id,
    idUsuario,
    idDestino,
    contenido,
    ubicacion,
    fecha
  ) {
    // Actualiza una publicación por su ID
    const [updatedRows] = await Publicacion.update(
      {
        idUsuario,
        idDestino,
        contenido,
        ubicacion,
        fecha,
      },
      {
        where: {
          id,
        },
      }
    );

    if (updatedRows === 0) {
      throw new Error('Publicación no encontrada');
    }

    const publicacionUpdated = this.getById(id);

    return publicacionUpdated;
  }

  async delete(id) {
    // Elimina una publicación por su ID
    const publicacion = await this.getById(id);

    if (!publicacion) {
      throw new Error('Publicación no encontrada');
    }

    await publicacion.destroy();

    return publicacion;
  }
}

module.exports = new PublicacionDAO();