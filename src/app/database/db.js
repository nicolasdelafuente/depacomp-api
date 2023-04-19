const Sequelize = require("sequelize");

const config = require('../../config/database');
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

                    
db.Sequelize = Sequelize;
// Vinculación modelos a BD

db.Carrera = require('../models/carrera')(sequelize, Sequelize);
db.Categoria = require('../models/categoria')(sequelize, Sequelize);
db.DocumentoTipo = require('../models/documentoTipo')(sequelize, Sequelize);
db.Entrevista = require('../models/entrevista')(sequelize, Sequelize);
db.Estado = require('../models/estado')(sequelize, Sequelize);
db.Genero = require('../models/genero')(sequelize, Sequelize);
db.Instituto = require('../models/instituto')(sequelize, Sequelize);
db.Localidad = require('../models/localidad')(sequelize, Sequelize);
db.Pais = require('../models/pais')(sequelize, Sequelize);
db.Persona = require('../models/persona')(sequelize, Sequelize);
db.Provincia = require('../models/provincia')(sequelize, Sequelize);
db.Rol = require('../models/rol')(sequelize, Sequelize);
db.Seguimiento = require('../models/seguimiento')(sequelize, Sequelize);
db.SeguimientoTipo = require('../models/seguimientoTipo')(sequelize, Sequelize);
db.Usuario = require('../models/usuario')(sequelize, Sequelize);



db.Carrera.associate(db);
db.Categoria.associate(db);
db.DocumentoTipo.associate(db);
db.Entrevista.associate(db);
db.Estado.associate(db);
db.Genero.associate(db);
db.Instituto.associate(db);
db.Localidad.associate(db);
db.Pais.associate(db);
db.Persona.associate(db);
db.Provincia.associate(db);
db.Rol.associate(db);
db.Seguimiento.associate(db);
db.SeguimientoTipo.associate(db);
db.Usuario.associate(db);


/*
db.Pais.hasMany(db.Persona, {
  foreignKey: "pais_Id",
});
db.Persona.belongsTo(db.Pais, {
  foreignKey: "pais_Id",
});
*/



db.connection = sequelize
module.exports = db;