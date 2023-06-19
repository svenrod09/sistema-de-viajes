const express = require("express");
const router = express.Router();
const sucursalColaboradorController = require("../controllers/controllerSucursalColaborador"); // Controlador de Sucursales Asignadas a Colaboradores

// Ruta para crear una sucursal asignada
router.post("/crear", sucursalColaboradorController.crearSucursalAsignada);

// Ruta para obtener todas las sucursales asignadas
router.get("/listar", sucursalColaboradorController.listarSucursalesAsignadas);

// Ruta para modificar una sucursal asignada por su ID
router.put("/modificar/:id", sucursalColaboradorController.modificarSucursalAsignada);

// Ruta para eliminar una sucursal asignada por su ID
router.delete("/eliminar/:id", sucursalColaboradorController.eliminarSucursalAsignada);

module.exports = router;
