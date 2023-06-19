const Sucursal = require("../models/Sucursal"); // Modelo de Sucursales

// Crear una sucursal
async function crearSucursal(req, res) {
  try {
    const { nombre, direccion } = req.body;
    const sucursal = await Sucursal.create({ nombre, direccion });
    res
      .status(201)
      .json({ message: "Sucursal creada exitosamente :D", sucursal });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la sucursal :(", error });
  }
}

// Listar todas las sucursales
async function listarSucursales(req, res) {
  try {
    const sucursales = await Sucursal.findAll();
    res.status(200).json({ sucursales });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las sucursales :(", error });
  }
}

// Obtener una sucursal por su ID
async function obtenerSucursalPorId(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const sucursal = await Sucursal.findOne({ where: { id } }); // Buscar por id

    if (!sucursal) {
      return res.status(404).json({ message: "Sucursal no encontrada :(" });
    }

    res.status(200).json({ sucursal });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener la sucursal por ID :(", error });
  }
}

// Modificar una sucursal
async function modificarSucursal(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { nombre, direccion } = req.body;

    const sucursal = await Sucursal.findOne({ where: { id } }); // Buscar por id

    if (!sucursal) {
      return res.status(404).json({ message: "Sucursal no encontrada :(" });
    }

    sucursal.nombre = nombre;
    sucursal.direccion = direccion;
    await sucursal.save();

    res
      .status(200)
      .json({ message: "Sucursal modificada exitosamente :D", sucursal });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al modificar la sucursal :(", error });
  }
}

// Eliminar una sucursal
async function eliminarSucursal(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro

    const sucursal = await Sucursal.findOne({ where: { id } }); // Buscar por id

    if (!sucursal) {
      return res.status(404).json({ message: "Sucursal no encontrada :(" });
    }

    await sucursal.destroy();

    res.status(200).json({ message: "Sucursal eliminada exitosamente :D" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la sucursal :(", error });
  }
}

module.exports = {
  crearSucursal,
  listarSucursales,
  obtenerSucursalPorId,
  modificarSucursal,
  eliminarSucursal,
};
