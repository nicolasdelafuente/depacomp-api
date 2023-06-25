const Sequelize = require("sequelize");
const path = require('../../paths');
const config = require(`${path.CONFIG}/database`);
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Sequelize = Sequelize;

// Vinculación modelos a BD
db.Carrera = require(`${path.MODELS}/Carrera`)(sequelize, Sequelize);
db.Categoria = require(`${path.MODELS}/Categoria`)(sequelize, Sequelize);
db.DocumentoTipo = require(`${path.MODELS}/DocumentoTipo`)(sequelize, Sequelize);
db.Entrevista = require(`${path.MODELS}/Entrevista`)(sequelize, Sequelize);
db.Estado = require(`${path.MODELS}/Estado`)(sequelize, Sequelize);
db.Genero = require(`${path.MODELS}/Genero`)(sequelize, Sequelize);
db.Instituto = require(`${path.MODELS}/Instituto`)(sequelize, Sequelize);
db.Localidad = require(`${path.MODELS}/Localidad`)(sequelize, Sequelize);
db.Pais = require(`${path.MODELS}/Pais`)(sequelize, Sequelize);
db.Persona = require(`${path.MODELS}/Persona`)(sequelize, Sequelize);
db.Provincia = require(`${path.MODELS}/Provincia`)(sequelize, Sequelize);
db.Rol = require(`${path.MODELS}/Rol`)(sequelize, Sequelize);
db.Seguimiento = require(`${path.MODELS}/Seguimiento`)(sequelize, Sequelize);
db.SeguimientoTipo = require(`${path.MODELS}/SeguimientoTipo`)(sequelize, Sequelize);
db.Usuario = require(`${path.MODELS}/Usuario`)(sequelize, Sequelize);

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