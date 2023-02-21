'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pais = sequelize.define('Pais', {
    nombre: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    iso: DataTypes.STRING
  }, {
    tableName:"paises",
  });

  Pais.associate = function(models) {
    
    Pais.hasMany(models.Provincia, {
      foreignKey: "pais_id",
    });

  };

  return Pais;
};