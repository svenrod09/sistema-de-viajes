const { DataTypes } = require("sequelize"); // ORM
const db = require("../config/db"); // Conexión a la base de datos

const Tarifa = db.define(
  "tarifas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    precioPorKm: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: "tarifas",
    timestamps: false,
  }
);

module.exports = Tarifa;
