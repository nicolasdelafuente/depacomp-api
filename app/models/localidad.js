'use strict';

module.exports = (sequelize, DataTypes) => {
  const Localidad = sequelize.define('Localidad', {
    nombre: DataTypes.STRING
  }, {
    tableName:"localidades",
  });

  Localidad.associate = function(models) {
    
    Localidad.belongsTo(models.Provincia, {
      foreignKey: "provincia_id",
    });

  };
  
  return Localidad;
};