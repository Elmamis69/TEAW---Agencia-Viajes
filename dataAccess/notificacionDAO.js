const { Notificacion } = require('../models');

class NotificacionDAO {
  async create(tipoActividad, usuarioDestinatario, fechaHora) {
    const notificacion = await Notificacion.create({
      tipoActividad,
      usuarioDestinatario,
      fechaHora,
    });
    return notificacion;
  }

  async getAll() {
    const notificaciones = await Notificacion.findAll();
    return notificaciones;
  }

  async getById(id) {
    const notificacion = await Notificacion.findByPk(id);
    return notificacion;
  }

  async update(id, tipoActividad, usuarioDestinatario, fechaHora) {
    const [updatedRows] = await Notificacion.update(
      {
        tipoActividad,
        usuarioDestinatario,
        fechaHora,
      },
      {
        where: {
          id,
        },
      }
    );
    if (updatedRows === 0) {
      throw new Error('Notificación no encontrada');
    }
    const notificacionUpdated = this.getById(id);
    return notificacionUpdated;
  }

  async delete(id) {
    const notificacion = await this.getById(id);
    if (!notificacion) {
      throw new Error('Notificación no encontrada');
    }
    await notificacion.destroy();
    return notificacion;
  }
}

module.exports = new NotificacionDAO();
