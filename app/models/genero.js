'use strict';

module.exports = (sequelize, DataTypes) => {

  const Genero = sequelize.define('Genero', {
    nombre: DataTypes.STRING
  }, {
    tableName:"generos",
  });

  Genero.associate = function(models) {
    
    Genero.hasMany(models.Persona, {
      foreignKey: "genero_id",
    });

  };

  return Genero;
};