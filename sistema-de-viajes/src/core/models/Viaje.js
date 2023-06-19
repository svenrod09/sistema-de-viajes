const { DataTypes } = require("sequelize"); // ORM
const db = require("../config/db"); // Conexión a la base de datos
const Sucursal = require("./Sucursal"); // Modelo de Sucursales
const Transportista = require("./Transportista"); // Modelo de Transportistas
const Usuario = require("./Usuario"); // Modelo de Usuarios

const Viaje = db.define(
  "viajes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Sucursal,
        key: "id",
      },
    },
    idTransportista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Transportista,
        key: "id",
      },
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: "id",
      },
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    distancia: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: "viajes",
    timestamps: false,
  }
);

module.exports = Viaje;
