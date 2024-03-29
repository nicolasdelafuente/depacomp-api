'use strict';

module.exports = (sequelize, DataTypes) => {
  const Carrera = sequelize.define('Carrera', {
    nombre: DataTypes.STRING
  }, {
    tableName:"Carreras",
  });

  Carrera.associate = function(models) {
    
    Carrera.belongsTo(models.Instituto, {
      as:"instituto",
      foreignKey: "instituto_id",
    });

  };

  return Carrera;
};
