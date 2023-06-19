const express = require("express");
const router = express.Router();
const viajeController = require("../controllers/controllerViaje"); // Controlador de Viajes

// Ruta para crear un viaje
router.post("/crear", viajeController.crearViaje);

// Ruta para obtener todos los viajes
router.get("/listar", viajeController.listarViajes);

// Ruta para obtener un viaje por su ID
router.get("/obtenerViaje/:id", viajeController.obtenerViajePorId);

// Ruta para obtener un viaje por ID de transportista
router.get("/obtenerViajesPorTransportista/:idTransportista", viajeController.obtenerViajePorIdTransportista);

// Ruta para modificar un viaje por su ID
router.put("/modificar/:id", viajeController.modificarViaje);

// Ruta para eliminar un viaje por su ID
router.delete("/eliminar/:id", viajeController.eliminarViaje);

module.exports = router;