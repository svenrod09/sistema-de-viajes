const Rol = require("../models/Rol"); // Modelo de Roles

// Crear un rol
async function crearRol(req, res) {
  try {
    const { descripcion } = req.body;
    const rol = await Rol.create({ descripcion });
    res.status(201).json({ message: "Rol creado exitosamente :D", rol });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el rol :(", error });
  }
}

// Listar todos los roles
async function listarRoles(req, res) {
  try {
    const roles = await Rol.findAll();
    res.status(200).json({ roles });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los roles :(", error });
  }
}

// Modificar un rol
async function modificarRol(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { descripcion } = req.body;

    const rol = await Rol.findOne({ where: { id } }); // Buscar por id

    if (!rol) {
      return res.status(404).json({ message: "Rol no encontrado :(" });
    }

    rol.descripcion = descripcion;
    await rol.save();

    res.status(200).json({ message: "Rol modificado exitosamente :D", rol });
  } catch (error) {
    res.status(500).json({ message: "Error al modificar el rol :(", error });
  }
}

// Eliminar un rol
async function eliminarRol(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro

    const rol = await Rol.findOne({ where: { id } }); // Buscar por id

    if (!rol) {
      return res.status(404).json({ message: "Rol no encontrado :(" });
    }

    await rol.destroy();

    res.status(200).json({ message: "Rol eliminado exitosamente :D" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el rol :(", error });
  }
}

module.exports = {
  crearRol,
  listarRoles,
  modificarRol,
  eliminarRol,
};
