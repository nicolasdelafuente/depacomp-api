'use strict';

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
  }, {
    tableName:"Usuarios",
  });
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};