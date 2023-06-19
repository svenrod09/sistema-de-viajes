const express = require("express");
const router = express.Router();
const colaboradorController = require("../controllers/controllerColaborador"); // Controlador de Colaboradores

// Ruta para crear un colaborador
router.post("/crear", colaboradorController.crearColaborador);

// Ruta para obtener todos los colaboradores
router.get("/listar", colaboradorController.listarColaboradores);

// Ruta para obtener un colaborador por su ID
router.get("/obtenerColaborador/:id", colaboradorController.obtenerColaboradorPorId);

// Ruta para modificar un colaborador por su ID
router.put("/modificar/:id", colaboradorController.modificarColaborador);

// Ruta para eliminar un colaborador por su ID
router.delete("/eliminar/:id", colaboradorController.eliminarColaborador);

module.exports = router;
