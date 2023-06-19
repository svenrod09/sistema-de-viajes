const { DataTypes } = require("sequelize"); // ORM
const db = require("../config/db"); // Conexión a la base de datos
const Tarifa = require("./Tarifa"); // Modelo de Tarifas

const Transportista = db.define(
  "transportistas",
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
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    idTarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tarifa,
        key: "id",
      },
    },
  },
  {
    tableName: "transportistas",
    timestamps: false,
  }
);

module.exports = Transportista;
