'use strict';

module.exports = (sequelize, DataTypes) => {
  const SeguimientoTipo = sequelize.define('SeguimientoTipo', {
    nombre: DataTypes.STRING
  }, {
    tableName:"seguimientotipos",
  });

  SeguimientoTipo.associate = function(models) {
    // associations can be defined here
  };

  return SeguimientoTipo;
};