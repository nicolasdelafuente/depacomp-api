'use strict';

module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    nombre: DataTypes.STRING
  }, {
    tableName:"Roles",
  });

  Rol.associate = function(models) {
    
    Rol.hasMany(models.Persona, {
      as: "rol",
      foreignKey: "rol_id",
    });

  };

  return Rol;
};
