'use strict';

module.exports = (sequelize, DataTypes) => {
  const persona = sequelize.define('persona', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    tableName: "personas"
  });
/*
  persona.associate = function(models) {

  };
*/
  return persona;
};