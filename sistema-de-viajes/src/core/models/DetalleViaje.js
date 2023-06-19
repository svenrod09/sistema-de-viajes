const { DataTypes } = require("sequelize"); // ORM
const db = require("../config/db"); // Conexión a la base de datos
const Viaje = require("./Viaje"); // Modelo de Viajes
const Colaborador = require("./Colaborador"); // Modelo de Colaboradores

const DetalleViaje = db.define(
  "detalle_viajes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idViaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Viaje,
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
  },
  {
    tableName: "detalle_viajes",
    timestamps: false,
  }
);

module.exports = DetalleViaje;
