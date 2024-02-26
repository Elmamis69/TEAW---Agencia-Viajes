// Importar el modelo ResenaLugar
const { ResenaLugar } = require('../models/resenaLugar');

class ResenaLugarDAO {
  async create(nombreLugar, calificacion, comentario, fecha) {
    // Crea una nueva reseña de lugar con los datos proporcionados
    const resenaLugar = await ResenaLugar.create({
      nombreLugar,
      calificacion,
      comentario,
      fecha,
    });

    return resenaLugar;
  }

  async getAll() {
    // Obtiene todas las reseñas de lugar
    const resenasLugar = await ResenaLugar.findAll();

    return resenasLugar;
  }

  async getById(id) {
    // Obtiene una reseña de lugar por su ID
    const resenaLugar = await ResenaLugar.findByPk(id);

    return resenaLugar;
  }

  async update(id, nombreLugar, calificacion, comentario, fecha) {
    // Actualiza una reseña de lugar por su ID
    const [updatedRows] = await ResenaLugar.update(
      {
        nombreLugar,
        calificacion,
        comentario,
        fecha,
      },
      {
        where: {
          id,
        },
      }
    );

    if (updatedRows === 0) {
      throw new Error('Reseña de lugar no encontrada');
    }

    const resenaLugarUpdated = this.getById(id);

    return resenaLugarUpdated;
  }

  async delete(id) {
    // Elimina una reseña de lugar por su ID
    const resenaLugar = await this.getById(id);

    if (!resenaLugar) {
      throw new Error('Reseña de lugar no encontrada');
    }

    await resenaLugar.destroy();

    return resenaLugar;
  }
}

module.exports = new ResenaLugarDAO();
