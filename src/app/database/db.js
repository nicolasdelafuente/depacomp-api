const path = require('../../../paths');

const fs = require('fs');
const folderPath = '../models';

const Sequelize = require("sequelize");

const config = require(`${path.CONFIG}/database`);
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.Sequelize = Sequelize;

// Obtengo un array con el nombre de los modelos.
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.log(`Error al leer la carpeta: ${err}`);
    return;
  }

  // Filtrar los archivos con extensión .js
  const jsFiles = files.filter((file) => file.endsWith('.js'));

  // Crear el array con los nombres de los archivos
  const modelNames = jsFiles.map((file) => file.slice(0, -3));

  // Vinculación modelos a BD
  modelNames.forEach(modelName => {
    db[modelName] = require(`${path.MODELS}${modelName.toLowerCase()}`)(sequelize, Sequelize);
    db[modelName].associate(db);
  });


  /*
  db.Pais.hasMany(db.Persona, {
    foreignKey: "pais_Id",
  });
  db.Persona.belongsTo(db.Pais, {
    foreignKey: "pais_Id",
  });
  */
});


db.connection = sequelize
module.exports = db;