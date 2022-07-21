'use strict';

module.exports = (sequelize, DataTypes) => {
  const Entrevista = sequelize.define('Entrevista', {
    nombre: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    acciones: DataTypes.STRING
  }, {
    tableName:"entrevistas",
  });

  Entrevista.associate = function(models) {
    
    Entrevista.belongsTo(models.Seguimiento, {
      foreignKey: "seguimiento_id",
    });

  };

  return Entrevista;
};