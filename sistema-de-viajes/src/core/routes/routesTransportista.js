const express = require("express");
const router = express.Router();
const transportistaController = require("../controllers/controllerTransportista"); // Controlador de Transportistas

// Ruta para crear un transportista
router.post("/crear", transportistaController.crearTransportista);

// Ruta para obtener todos los transportistas
router.get("/listar", transportistaController.listarTransportistas);

// Ruta para obtener un transportista por su ID
router.get("/obtenerTransportista/:id", transportistaController.obtenerTransportistaPorId);

// Ruta para modificar un transportista por su ID
router.put("/modificar/:id", transportistaController.modificarTransportista);

// Ruta para eliminar un transportista por su ID
router.delete("/eliminar/:id", transportistaController.eliminarTransportista);

module.exports = router;
