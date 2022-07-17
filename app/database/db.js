const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {};

db.connection = new Sequelize(
                      config.database,
                      config.username,
                      config.password,
                      config
                    );


// Vinculación modelos a BD
db.pais = require('../models/Pais')(db.connection, DataTypes);
db.persona = require('../models/Persona')(db.connection, DataTypes);

// Asociaciones de los modelos
db.pais.associate(db)
db.persona.associate(db)

module.exports = db;