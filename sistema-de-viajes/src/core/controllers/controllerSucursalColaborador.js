const SucursalColaborador = require("../models/SucursalColaborador"); // Modelo de Sucursales Asignadas a Colaboradores
const Sucursal = require("../models/Sucursal"); // Modelo de Sucursales
const Colaborador = require("../models/Colaborador"); // Modelo de Colabores

// Asignar una sucursal a un colaborador
async function crearSucursalAsignada(req, res) {
  try {
    const { idSucursal, idColaborador, distancia } = req.body;

    // Verificar si la sucursal existe
    const sucursal = await Sucursal.findByPk(idSucursal);
    if (!sucursal) {
      return res.status(404).json({ message: "Sucursal no encontrada :(" });
    }

    // Verificar si el colaborador existe
    const colaborador = await Colaborador.findByPk(idColaborador);
    if (!colaborador) {
      return res.status(404).json({ message: "Colaborador no encontrado :(" });
    }

    // Crear la relación entre sucursal y colaborador
    const sucursalAsignada = await SucursalColaborador.create({
      idSucursal,
      idColaborador,
      distancia,
    });

    res
      .status(201)
      .json({ message: "Sucursal asignada exitosamente :D", sucursalAsignada });
  } catch (error) {
    res.status(500).json({ message: "Error al asignar la sucursal :(", error });
  }
}

// Listar todas las sucursales asignadas a colaboradores
async function listarSucursalesAsignadas(req, res) {
  try {
    const sucursalesAsignadas = await SucursalColaborador.findAll();
    res.status(200).json({ sucursalesAsignadas });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las sucursales asignadas :(", error });
  }
}

// Modificar una sucursal asignada
async function modificarSucursalAsignada(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { idSucursal, idColaborador, distancia } = req.body;

    const sucursalAsignada = await SucursalColaborador.findOne({
      where: { id },
    }); // Buscar por id

    if (!sucursalAsignada) {
      return res
        .status(404)
        .json({ message: "Sucursal asignada no encontrada :(" });
    }

    // Verificar si la sucursal existe
    const sucursal = await Sucursal.findByPk(idSucursal);
    if (!sucursal) {
      return res.status(404).json({ message: "Sucursal no encontrada :(" });
    }

    // Verificar si el colaborador existe
    const colaborador = await Colaborador.findByPk(idColaborador);
    if (!colaborador) {
      return res.status(404).json({ message: "Colaborador no encontrado :(" });
    }

    sucursalAsignada.idSucursal = idSucursal;
    sucursalAsignada.idColaborador = idColaborador;
    sucursalAsignada.distancia = distancia;
    await sucursalAsignada.save();

    res
      .status(200)
      .json({
        message: "Sucursal asignada modificada exitosamente :D",
        sucursalAsignada,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al modificar la sucursal asignada :(", error });
  }
}

// Eliminar una sucursal asignada
async function eliminarSucursalAsignada(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro

    const sucursalAsignada = await SucursalColaborador.findOne({
      where: { id },
    }); // Buscar por id

    if (!sucursalAsignada) {
      return res
        .status(404)
        .json({ message: "Sucursal asignada no encontrada :(" });
    }

    await sucursalAsignada.destroy();

    res
      .status(200)
      .json({ message: "Sucursal asignada eliminada exitosamente :D" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la sucursal asignada :(", error });
  }
}

module.exports = {
  crearSucursalAsignada,
  listarSucursalesAsignadas,
  modificarSucursalAsignada,
  eliminarSucursalAsignada,
};
