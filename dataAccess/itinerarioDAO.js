// Importar el modelo Itinerario
const { Itinerario } = require('../models');

class ItinerarioDAO {
  async create(actividades, horarios, lugaresEspecificos, comentarios) {
    // Crea un nuevo itinerario con los datos proporcionados
    const itinerario = await Itinerario.create({
      actividades,
      horarios,
      lugaresEspecificos,
      comentarios,
    });

    return itinerario;
  }

  async getAll() {
    // Obtiene todos los itinerarios
    const itinerarios = await Itinerario.findAll();

    return itinerarios;
  }

  async getById(id) {
    // Obtiene un itinerario por su ID
    const itinerario = await Itinerario.findByPk(id);

    return itinerario;
  }

  async update(id, actividades, horarios, lugaresEspecificos, comentarios) {
    // Actualiza un itinerario por su ID
    const [updatedRows] = await Itinerario.update(
      {
        actividades,
        horarios,
        lugaresEspecificos,
        comentarios,
      },
      {
        where: {
          id,
        },
      }
    );

    if (updatedRows === 0) {
      throw new Error('Itinerario no encontrado');
    }

    const itinerarioUpdated = this.getById(id);

    return itinerarioUpdated;
  }

  async delete(id) {
    // Elimina un itinerario por su ID
    const itinerario = await this.getById(id);

    if (!itinerario) {
      throw new Error('Itinerario no encontrado');
    }

    await itinerario.destroy();

    return itinerario;
  }
}

module.exports = new ItinerarioDAO();
