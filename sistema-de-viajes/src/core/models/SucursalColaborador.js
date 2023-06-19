const { DataTypes } = require("sequelize"); // ORM
const db = require("../config/db"); // Conexión a la base de datos
const Sucursal = require("./Sucursal"); // Modelo de Sucursales
const Colaborador = require("./Colaborador"); // Modelo de Colaboradores

const SucursalColaborador = db.define(
  "sucursales_colaboradores",
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
    idColaborador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Colaborador,
        key: "id",
      },
    },
    distancia: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: "sucursales_colaboradores",
    timestamps: false,
  }
);

module.exports = SucursalColaborador;
