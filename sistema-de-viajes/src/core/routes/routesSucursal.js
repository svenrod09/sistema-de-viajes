const express = require("express");
const router = express.Router();
const sucursalController = require("../controllers/controllerSucursal"); // Controlador de Sucursales

// Ruta para crear una sucursal
router.post("/crear", sucursalController.crearSucursal);

// Ruta para obtener todas las sucursales
router.get("/listar", sucursalController.listarSucursales);

// Ruta para obtener una sucursal por su ID
router.get("/obtenerSucursal/:id", sucursalController.obtenerSucursalPorId);

// Ruta para modificar una sucursal por su ID
router.put("/modificar/:id", sucursalController.modificarSucursal);

// Ruta para eliminar una sucursal por su ID
router.delete("/eliminar/:id", sucursalController.eliminarSucursal);

module.exports = router;
