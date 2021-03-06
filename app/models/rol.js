'use strict';

module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    nombre: DataTypes.STRING
  }, {
    tableName:"roles",
  });

  Rol.associate = function(models) {
    
    Rol.hasMany(models.Persona, {
      foreignKey: "rol_id",
    });

  };

  return Rol;
};