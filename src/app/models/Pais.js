'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pais = sequelize.define('Pais', {
    nombre: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    iso: DataTypes.STRING
  }, {
    tableName:"Paises",
  });

  Pais.associate = function(models) {
    
    Pais.hasMany(models.Provincia, {
      as: "pais",
      foreignKey: "pais_id",
    });

  };

  return Pais;
};
