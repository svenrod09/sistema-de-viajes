const express = require("express");
const router = express.Router();
const tarifaController = require("../controllers/controllerTarifa"); // Controlador de Tarifas

// Ruta para crear una tarifa
router.post("/crear", tarifaController.crearTarifa);

// Ruta para obtener todas las tarifas
router.get("/listar", tarifaController.listarTarifas);

// Ruta para modificar una tarifa por su ID
router.put("/modificar/:id", tarifaController.modificarTarifa);

// Ruta para eliminar una tarifa por su ID
router.delete("/eliminar/:id", tarifaController.eliminarTarifa);

module.exports = router;
