const Viaje = require("../models/Viaje"); // Modelo de Viajes
const Sucursal = require("../models/Sucursal"); // Modelo de Sucursales
const Transportista = require("../models/Transportista"); // Modelo de Transportistas
const Usuario = require("../models/Usuario"); // Modelo de Usuarios

// Crear un viaje
async function crearViaje(req, res) {
  try {
    const { idSucursal, idTransportista, idUsuario, fecha, distancia } =
      req.body;

    // Verificar si existen la sucursal, el transportista y el usuario
    const sucursal = await Sucursal.findByPk(idSucursal);
    const transportista = await Transportista.findByPk(idTransportista);
    const usuario = await Usuario.findByPk(idUsuario);

    if (!sucursal || !transportista || !usuario) {
      return res
        .status(404)
        .json({ error: "No se encontraron las referencias :(" });
    }

    const viaje = await Viaje.create({
      idSucursal,
      idTransportista,
      idUsuario,
      fecha,
      distancia,
    });

    res.json({ message: "Viaje creado exitosamente :D", viaje });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el viaje :(", error });
  }
}

// Listar todos los viajes
async function listarViajes(req, res) {
  try {
    const viajes = await Viaje.findAll();
    res.json(viajes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los viajes :(", error });
  }
}

// Obtener un viaje por su ID
async function obtenerViajePorId(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const viaje = await Viaje.findOne({ where: { id } });
    if (!viaje) {
      return res.status(404).json({ error: "Viaje no encontrado :(" });
    }
    res.json(viaje);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el viaje :(", error });
  }
}

// Obtener los viajes por el id del transportista
async function obtenerViajePorIdTransportista(req, res) {
  try {
    const { idTransportista } = req.params; // Enviar id de transportista como parámetro
    const viajes = await Viaje.findAll({ where: { idTransportista } }); // Buscar por id de transportista

    if (!viajes) {
      return res.status(404).json({ error: "Viaje no encontrado :(" });
    }

    res.json(viajes);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los viajes del transportista :(",
      error,
    });
  }
}

// Modificar un viaje
async function modificarViaje(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { idSucursal, idTransportista, idUsuario, fecha, distancia } =
      req.body;

    const viaje = await Viaje.findOne({ where: { id } }); // Buscar por id
    if (!viaje) {
      return res.status(404).json({ error: "Viaje no encontrado :(" });
    }

    // Verificar si existen la sucursal, el transportista y el usuario
    const sucursal = await Sucursal.findByPk(idSucursal);
    const transportista = await Transportista.findByPk(idTransportista);
    const usuario = await Usuario.findByPk(idUsuario);

    if (!sucursal || !transportista || !usuario) {
      return res
        .status(404)
        .json({ error: "No se encontraron las referencias :(" });
    }

    viaje.idSucursal = idSucursal;
    viaje.idTransportista = idTransportista;
    viaje.idUsuario = idUsuario;
    viaje.fecha = fecha;
    viaje.distancia = distancia;

    await viaje.save();

    res.json({ message: "Viaje modificado exitosamente :D", viaje });
  } catch (error) {
    res.status(500).json({ message: "Error al modificar el viaje :(", error });
  }
}

// Eliminar un viaje
async function eliminarViaje(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro

    const viaje = await Viaje.findOne({ where: { id } }); // Buscar por id
    if (!viaje) {
      return res.status(404).json({ error: "Viaje no encontrado :(" });
    }

    await viaje.destroy();

    res.json({ message: "Viaje eliminado exitosamente :D" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el viaje :(", error });
  }
}

module.exports = {
  crearViaje,
  listarViajes,
  obtenerViajePorId,
  obtenerViajePorIdTransportista,
  modificarViaje,
  eliminarViaje,
};
