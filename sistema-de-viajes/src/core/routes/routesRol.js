const express = require("express");
const router = express.Router();
const rolController = require("../controllers/controllerRol"); // Controlador de Roles

// Ruta para crear un rol
router.post("/crear", rolController.crearRol);

// Ruta para obtener todos los roles
router.get("/listar", rolController.listarRoles);

// Ruta para modificar un rol por su ID
router.put("/modificar/:id", rolController.modificarRol);

// Ruta para eliminar un rol por su ID
router.delete("/eliminar/:id", rolController.eliminarRol);

module.exports = router;
