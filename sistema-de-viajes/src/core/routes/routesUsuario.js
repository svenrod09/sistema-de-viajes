const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/controllerUsuario"); // Controlador de Usuarios

// Ruta para crear un usuario
router.post("/crear", usuarioController.crearUsuario);

// Ruta para obtener todos los usuarios
router.get("/listar", usuarioController.listarUsuarios);

// Ruta para obtener un usuario por su ID
router.get("/obtenerUsuario/:id", usuarioController.obtenerUsuarioPorId);

// Ruta para modificar un usuario por su ID
router.put("/modificar/:id", usuarioController.modificarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete("/eliminar/:id", usuarioController.eliminarUsuario);

// Ruta para iniciar sesión con el nombreUsuario y el password
router.post("/login", usuarioController.login);

module.exports = router;
