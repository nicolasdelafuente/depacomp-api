'use strict';

module.exports = (sequelize, DataTypes) => {
  const Provincia = sequelize.define('Provincia', {
    nombre: DataTypes.STRING
  }, {
    tableName:"provincias",
  });

  Provincia.associate = function(models) {
    
    Provincia.belongsTo(models.Pais, {
      as: "pais",
      foreignKey: "pais_id",
    });

    Provincia.hasMany(models.Localidad, {
      foreignKey: "id",
    });

  };
  
  return Provincia;
};