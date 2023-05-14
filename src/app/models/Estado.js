'use strict';

module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define('Estado', {
    nombre: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    tableName:"Estados",
  });
  Estado.associate = function(models) {
    
    Estado.hasMany(models.Seguimiento, {
      foreignKey: "estado_id",
    });
    
  };

  return Estado;
};
