const Sequelize = require("sequelize");
const path = require('../../paths');
const config = require('../../config/database');
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Sequelize = Sequelize;

// Vinculación modelos a BD
db.Carrera = require(`${path.MODELS}/carrera`)(sequelize, Sequelize);
db.Categoria = require(`${path.MODELS}/categoria`)(sequelize, Sequelize);
db.DocumentoTipo = require(`${path.MODELS}/documentoTipo`)(sequelize, Sequelize);
db.Entrevista = require(`${path.MODELS}/entrevista`)(sequelize, Sequelize);
db.Estado = require(`${path.MODELS}/estado`)(sequelize, Sequelize);
db.Genero = require(`${path.MODELS}/genero`)(sequelize, Sequelize);
db.Instituto = require(`${path.MODELS}/instituto`)(sequelize, Sequelize);
db.Localidad = require(`${path.MODELS}/localidad`)(sequelize, Sequelize);
db.Pais = require(`${path.MODELS}/pais`)(sequelize, Sequelize);
db.Persona = require(`${path.MODELS}/persona`)(sequelize, Sequelize);
db.Provincia = require(`${path.MODELS}/provincia`)(sequelize, Sequelize);
db.Rol = require(`${path.MODELS}/rol`)(sequelize, Sequelize);
db.Seguimiento = require(`${path.MODELS}/seguimiento`)(sequelize, Sequelize);
db.SeguimientoTipo = require(`${path.MODELS}/seguimientoTipo`)(sequelize, Sequelize);
db.Usuario = require(`${path.MODELS}/usuario`)(sequelize, Sequelize);

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

db.connection = sequelize
module.exports = db;