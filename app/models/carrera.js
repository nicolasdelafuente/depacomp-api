'use strict';

module.exports = (sequelize, DataTypes) => {
  const Carrera = sequelize.define('Carrera', {
    nombre: DataTypes.STRING
  }, {
    tableName:"carreras",
  });

  Carrera.associate = function(models) {
    
    Carrera.belongsTo(models.Instituto, {
      foreignKey: "instituto_id",
    });

  };

  return Carrera;
};