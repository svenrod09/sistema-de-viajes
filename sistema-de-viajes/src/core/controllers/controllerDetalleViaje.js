const DetalleViaje = require("../models/DetalleViaje"); // Modelo Detalle de Viajes

// Crear un detalle de viaje
async function crearDetalleViaje(req, res) {
  try {
    const { idViaje, idColaborador } = req.body;
    const detalleViaje = await DetalleViaje.create({ idViaje, idColaborador });
    res.json({
      message: "Detalle de viaje creado exitosamente :D",
      detalleViaje,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al añadir el detalle de viaje :(", error });
  }
}

// Listar todos los detalles de viaje
async function listarDetallesViaje(req, res) {
  try {
    const detallesViaje = await DetalleViaje.findAll();
    res.json(detallesViaje);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los detalles de viaje", error });
  }
}

// Obtener detalles de viaje por ID de viaje
async function obtenerDetalleViajePorIdViaje(req, res) {
  try {
    const { idViaje } = req.params; // Enviar id de viaje como parámetro
    const detallesViaje = await DetalleViaje.findAll({ where: { idViaje } }); // Buscar detalle por id de viaje

    if (!detallesViaje) {
      return res
        .status(404)
        .json({ error: "Detalles de viaje no encontrados :(" });
    }

    res.json(detallesViaje);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener los detalles de viaje por ID de viaje :(",
        error,
      });
  }
}

// Modificar un detalle de viaje
async function modificarDetalleViaje(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { idViaje, idColaborador } = req.body;

    const detalleViaje = await DetalleViaje.findOne({ where: { id } }); // Buscar por id
    if (!detalleViaje) {
      return res
        .status(404)
        .json({ error: "Detalle de viaje no encontrado :(" });
    }

    detalleViaje.idViaje = idViaje;
    detalleViaje.idColaborador = idColaborador;

    await detalleViaje.save();

    res.json({
      message: "Detalle de viaje modificado exitosamente :D",
      detalleViaje,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al modificar el detalle de viaje :(", error });
  }
}

// Eliminar un detalle de viaje
async function eliminarDetalleViaje(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro

    const detalleViaje = await DetalleViaje.findOne({ where: { id } }); // Buscar por id
    if (!detalleViaje) {
      return res
        .status(404)
        .json({ error: "Detalle de viaje no encontrado :(" });
    }

    await detalleViaje.destroy();

    res.json({ message: "Detalle de viaje eliminado exitosamente :D" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el detalle de viaje :(", error });
  }
}

module.exports = {
  crearDetalleViaje,
  listarDetallesViaje,
  obtenerDetalleViajePorIdViaje,
  modificarDetalleViaje,
  eliminarDetalleViaje,
};
