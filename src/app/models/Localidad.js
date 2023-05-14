'use strict';

module.exports = (sequelize, DataTypes) => {
  const Localidad = sequelize.define('Localidad', {
    nombre: DataTypes.STRING
  }, {
    tableName:"Localidades",
  });

  Localidad.associate = function(models) {
    
    Localidad.belongsTo(models.Provincia, {
      foreignKey: "provincia_id",
      as: "Provincia"
    });

  };
  
  return Localidad;
};
