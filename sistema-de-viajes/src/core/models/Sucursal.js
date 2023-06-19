const { DataTypes } = require("sequelize"); // ORM
const db = require("../config/db"); // Conexión a la base de datos

const Sucursal = db.define(
  "sucursales",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "sucursales",
    timestamps: false,
  }
);

module.exports = Sucursal;
