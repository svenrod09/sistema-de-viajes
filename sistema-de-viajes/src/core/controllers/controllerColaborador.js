const Colaborador = require("../models/Colaborador"); // Modelo de Colaboradores

// Crear un colaborador
async function crearColaborador(req, res) {
  try {
    const { nombre, apellido, direccion, telefono } = req.body;
    const colaborador = await Colaborador.create({
      nombre,
      apellido,
      direccion,
      telefono,
    });
    res
      .status(201)
      .json({ message: "Colaborador creado exitosamente :D", colaborador });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el colaborador :(", error });
  }
}

// Listar todos los colaboradores
async function listarColaboradores(req, res) {
  try {
    const colaboradores = await Colaborador.findAll();
    res.status(200).json({ colaboradores });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los colaboradores :(", error });
  }
}

// Obtener un colaborador por su ID
async function obtenerColaboradorPorId(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const colaborador = await Colaborador.findOne({ where: { id } }); // Buscar por id

    if (!colaborador) {
      return res.status(404).json({ message: "Colaborador no encontrado :(" });
    }

    res.status(200).json({ colaborador });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el colaborador por ID :(", error });
  }
}

// Modificar un colaborador
async function modificarColaborador(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { nombre, apellido, direccion, telefono } = req.body;

    const colaborador = await Colaborador.findOne({ where: { id } }); // Buscar por id

    if (!colaborador) {
      return res.status(404).json({ message: "Colaborador no encontrado :(" });
    }

    colaborador.nombre = nombre;
    colaborador.apellido = apellido;
    colaborador.direccion = direccion;
    colaborador.telefono = telefono;
    await colaborador.save();

    res
      .status(200)
      .json({ message: "Colaborador modificado exitosamente :D", colaborador });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al modificar el colaborador :(", error });
  }
}

// Eliminar un colaborador
async function eliminarColaborador(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro

    const colaborador = await Colaborador.findOne({ where: { id } }); // Buscar por id

    if (!colaborador) {
      return res.status(404).json({ message: "Colaborador no encontrado :(" });
    }

    await colaborador.destroy();

    res.status(200).json({ message: "Colaborador eliminado exitosamente :D" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el colaborador :(", error });
  }
}

module.exports = {
  crearColaborador,
  listarColaboradores,
  obtenerColaboradorPorId,
  modificarColaborador,
  eliminarColaborador,
};
