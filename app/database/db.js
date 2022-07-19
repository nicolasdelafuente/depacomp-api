const Sequelize = require("sequelize");

const config = require('../../config/database');
const db = {};

const sequelize = new Sequelize(
                      config.database,
                      config.username,
                      config.password,
                      config
                    );

                    
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Vinculación modelos a BD
db.Pais = require('../models/Pais')(sequelize, Sequelize);
db.Persona = require('../models/Persona')(sequelize, Sequelize);

db.Pais.hasMany(db.Persona, {
  foreignKey: "paisId",
});
db.Persona.belongsTo(db.Pais, {
  foreignKey: "paisId",
});

db.connection = sequelize
module.exports = db;