const {Usuario} = require("../models");
class UsuarioDAO {
    constructor() {}

    async create(nombreUsuario, correo, clave) {
        //May replace parameters with an object from a carpet named DataObjects
        try {
            const usuario = await Usuario.create({
                nombreUsuario,
                correo,
                clave,
            });
            return usuario;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const usuarios = await Usuario.findAll();
            return usuarios;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const usuario = await Usuario.findByPk(id);
            return usuario;
        } catch (error) {
            throw error;
        }
    }

    async update(id, nombreUsuario, correo, clave) {
        try {
            const usuario = await Usuario.update(
                {
                    nombre,
                    correo,
                    clave,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const usuarioUpdated = this.getById(id);
            return usuarioUpdated;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                throw new Error("Producto not found");
            }
            await usuario.destroy();
            return usuario;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UsuarioDAO();