const express = require("express");
const router = express.Router();
const detalleViajeController = require("../controllers/controllerDetalleViaje"); // Controlador de Detalle de Viajes

// Ruta para crear un detalle de viaje
router.post("/crear", detalleViajeController.crearDetalleViaje);

// Ruta para obtener todos los detalles de viaje
router.get("/listar", detalleViajeController.listarDetallesViaje);

// Ruta para obtener un detalle de viaje por ID de viaje
router.get("/obtenerDetalleViaje/:idViaje", detalleViajeController.obtenerDetalleViajePorIdViaje);

// Ruta para modificar un detalle de viaje por su ID
router.put("/modificar/:id", detalleViajeController.modificarDetalleViaje);

// Ruta para eliminar un detalle de viaje por su ID
router.delete("/eliminar/:id", detalleViajeController.eliminarDetalleViaje);

module.exports = router;