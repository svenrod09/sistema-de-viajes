const cors = require('cors');
const express = require("express");
const app = express();

app.use(express.json());

app.use(cors());

// Rutas 

app.use("/colaboradores", require("./routes/routesColaborador")); // Colaboradores
app.use("/detalleViajes", require("./routes/routesDetalleViaje")); // Detalle de Viajes
app.use("/roles", require("./routes/routesRol")); // Roles
app.use("/sucursales", require("./routes/routesSucursal")); // Sucursales
app.use("/sucursalesAsignadas", require("./routes/routesSucursalColaborador")); // Sucursales Asignadas a Colaboradores
app.use("/tarifas", require("./routes/routesTarifa")); // Tarifas
app.use("/transportistas", require("./routes/routesTransportista")); // Transportistas
app.use("/usuarios", require("./routes/routesUsuario")); // Usuarios
app.use("/viajes", require("./routes/routesViaje")); // Viajes

// Iniciar servidor de la API

app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 5000");
});
