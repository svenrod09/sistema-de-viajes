const { Sequelize } = require("sequelize"); // ORM
const config = require("./config");

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, { // Configurar la conexión a la base de datos
  host: config.db.host,
  port: config.db.port,
  dialect: config.db.dialect,
});

module.exports = sequelize;
