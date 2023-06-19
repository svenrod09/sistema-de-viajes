const Tarifa = require("../models/Tarifa"); // Modelo de Tarifas

// Crear una tarifa
async function crearTarifa(req, res) {
  try {
    const { descripcion, precioPorKm } = req.body;
    const tarifa = await Tarifa.create({ descripcion, precioPorKm });
    res.status(201).json({ message: "Tarifa creada exitosamente :D", tarifa });
  } catch (error) {
    res.status(500).json({ message: "Error al añadir la tarifa :(", error });
  }
}

// Listar todas las tarifas
async function listarTarifas(req, res) {
  try {
    const tarifas = await Tarifa.findAll();
    res.json(tarifas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las tarifas :(", error });
  }
}

// Modificar una tarifa existente
async function modificarTarifa(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { descripcion, precioPorKm } = req.body;

    const tarifa = await Tarifa.findOne({ where: { id } }); // Buscar por id

    if (!tarifa) {
      return res.status(404).json({ message: "Tarifa no encontrada :(" });
    }

    tarifa.descripcion = descripcion;
    tarifa.precioPorKm = precioPorKm;
    await tarifa.save();

    res
      .status(200)
      .json({ message: "Tarifa modificada exitosamente :D", tarifa });
  } catch (error) {
    res.status(500).json({ message: "Error al modificar la tarifa :(", error });
  }
}

// Eliminar una tarifa existente
async function eliminarTarifa(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro

    const tarifa = await Tarifa.findOne({ where: { id } }); // Buscar por id

    if (!tarifa) {
      return res.status(404).json({ message: "Tarifa no encontrada :(" });
    }

    await tarifa.destroy();

    res.status(200).json({ message: "Tarifa eliminada exitosamente :D" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la tarifa :(", error });
  }
}

module.exports = {
  crearTarifa,
  listarTarifas,
  modificarTarifa,
  eliminarTarifa,
};
