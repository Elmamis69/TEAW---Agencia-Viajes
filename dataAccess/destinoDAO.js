// Importar los modelos Destino y ResenaLugar
const { Destino, ResenaLugar } = require('../models/destino');

class DestinoDAO {
  async create(nombreDestino, descripcion) {
    // Crea un nuevo destino con los datos proporcionados
    const destino = await Destino.create({
      nombreDestino,
      descripcion,
    });

    return destino;
  }

  async getAll() {
    // Obtiene todos los destinos
    const destinos = await Destino.findAll();

    return destinos;
  }

  async getById(id) {
    // Obtiene un destino por su ID
    const destino = await Destino.findByPk(id, {
      include: [ResenaLugar],
    });

    return destino;
  }

  async update(id, nombreDestino, descripcion) {
    // Actualiza un destino por su ID
    const [updatedRows] = await Destino.update(
      {
        nombreDestino,
        descripcion,
      },
      {
        where: {
          id,
        },
      }
    );

    if (updatedRows === 0) {
      throw new Error('Destino no encontrado');
    }

    const destinoUpdated = this.getById(id);

    return destinoUpdated;
  }

  async delete(id) {
    // Elimina un destino por su ID
    const destino = await this.getById(id);

    if (!destino) {
      throw new Error('Destino no encontrado');
    }

    await destino.destroy();

    return destino;
  }
}

module.exports = new DestinoDAO();