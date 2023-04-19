'use strict';

module.exports = (sequelize, DataTypes) => {
  const Provincia = sequelize.define('Provincia', {
    nombre: DataTypes.STRING
  }, {
    tableName:"Provincias",
  });

  Provincia.associate = function(models) {
    
    Provincia.belongsTo(models.Pais, {
      as: "Pais",
      foreignKey: "pais_id",
    });

    Provincia.hasMany(models.Localidad, {
      foreignKey: "id",
    });

  };
  
  return Provincia;
};