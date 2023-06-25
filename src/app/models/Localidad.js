'use strict';

module.exports = (sequelize, DataTypes) => {
  const Localidad = sequelize.define('Localidad', {
    nombre: DataTypes.STRING
  }, {
    tableName:"Localidades",
  });

  Localidad.associate = function(models) {
    
    Localidad.belongsTo(models.Provincia, {
      as: "provincia",
      foreignKey: "provincia_id"
    });

  };
  
  return Localidad;
};
