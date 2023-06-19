const bcrypt = require("bcryptjs"); // Bcrypt para encriptar la contraseña
const Usuario = require("../models/Usuario"); // Modelo de Usuarios
const Rol = require("../models/Rol"); // Modelo de Roles

// Crear un usuario
async function crearUsuario(req, res) {
  try {
    const { nombreUsuario, password, idRol } = req.body;

    // Verificar si existe el rol asociado
    const rol = await Rol.findByPk(idRol);
    if (!rol) {
      return res.status(404).json({ error: "Rol no encontrado :(" });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = await Usuario.create({
      nombreUsuario,
      password: hashedPassword,
      idRol,
    });

    res.json({ message: "Usuario creado exitosamente :D", usuario });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario :(", error });
  }
}

// Listar todos los usuarios
async function listarUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los usuarios :(", error });
  }
}

// Obtener un usuario por su ID
async function obtenerUsuarioPorId(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const usuario = await Usuario.findOne({ where: { id } }); // Buscar por id
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado :(" });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario :(", error });
  }
}

// Modificar un usuario
async function modificarUsuario(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro
    const { nombreUsuario, password, idRol } = req.body;

    const usuario = await Usuario.findOne({ where: { id } }); // Buscar por id
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado :(" });
    }

    // Verificar si existe el rol asociado
    const rol = await Rol.findByPk(idRol);
    if (!rol) {
      return res.status(404).json({ error: "Rol no encontrado :(" });
    }

    usuario.nombreUsuario = nombreUsuario;
    usuario.idRol = idRol;

    // Encriptar nueva contraseña
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      usuario.password = hashedPassword;
    }


    await usuario.save();

    res.json({ message: "Usuario modificado exitosamente :D", usuario });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al modificar el usuario :(", error });
  }
}

// Eliminar un usuario
async function eliminarUsuario(req, res) {
  try {
    const { id } = req.params; // Enviar id como parámetro

    const usuario = await Usuario.findOne({ where: { id } }); // Buscar por id
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado :(" });
    }

    await usuario.destroy();

    res.json({ message: "Usuario eliminado exitosamente :D" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario :(", error });
  }
}

// Iniciar sesión
async function login(req, res) {
  try {
    const { nombreUsuario, password } = req.body;

    const usuario = await Usuario.findOne({ where: { nombreUsuario } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario o contraseña incorrecta :(" });
    }

    // Verificar si la contraseña encriptada coincide con la contraseña sin encriptar
    const verificarPassword = await bcrypt.compare(password, usuario.password);
    if (!verificarPassword) {
      return res.status(401).json({ error: "Usuario o contraseña incorrecta :(" });
    }

    res.json({ message: "Inicio de sesión exitoso :D", usuario });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión :(", error });
  }
}

module.exports = {
  crearUsuario,
  listarUsuarios,
  obtenerUsuarioPorId,
  modificarUsuario,
  eliminarUsuario,
  login
};
