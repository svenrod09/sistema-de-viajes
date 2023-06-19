const Transportista = require("../models/Transportista"); // Modelo de Transportistas

// Crear un transportista
async function crearTransportista(req, res) {
  try {
    const { nombre, apellido, telefono, idTarifa } = req.body;
    const transportista = await Transportista.create({
      nombre,
      apellido,
      telefono,
      idTarifa,
    });
    res.json({
      message: "Transportista creado exitosamente :D",
      transportista,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el transportista :(", error });
  }
}

// Listar todos los transportistas
async function listarTransportistas(req, res) {
  try {
    const transportistas = await Transportista.findAll();
    res.json(transportistas);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los transportistas :(", error });
  }
}

// Obtener un transportista por su ID
async function obtenerTransportistaPorId(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const transportista = await Transportista.findOne({ where: { id } }); // Buscar por id
    if (!transportista) {
      return res.status(404).json({ error: "Transportista no encontrado :(" });
    }
    res.json(transportista);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el transportista por ID :(", error });
  }
}

// Modificar un transportista
async function modificarTransportista(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { nombre, apellido, telefono, idTarifa } = req.body;
    const transportista = await Transportista.findOne({ where: { id } }); // Buscar por id
    if (!transportista) {
      return res.status(404).json({ error: "Transportista no encontrado :(" });
    }
    transportista.nombre = nombre;
    transportista.apellido = apellido;
    transportista.telefono = telefono;
    transportista.idTarifa = idTarifa;
    await transportista.save();
    res.json({
      message: "Transportista modificado exitosamente :D",
      transportista,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al modificar el transportista :(", error });
  }
}

// Eliminar un transportista
async function eliminarTransportista(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const transportista = await Transportista.findByPk(id); // Buscar por id
    if (!transportista) {
      return res.status(404).json({ error: "Transportista no encontrado :(" });
    }
    await transportista.destroy();
    res.json({ message: "Transportista eliminado exitosamente :D" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el transportista :(", error });
  }
}

module.exports = {
  crearTransportista,
  listarTransportistas,
  obtenerTransportistaPorId,
  modificarTransportista,
  eliminarTransportista,
};
