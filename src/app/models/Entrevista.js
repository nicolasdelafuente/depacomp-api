'use strict';

const Seguimiento = require("./Seguimiento");

module.exports = (sequelize, DataTypes) => {
  const Entrevista = sequelize.define('Entrevista', {
    observaciones: DataTypes.STRING,
    acciones: DataTypes.STRING
  }, {
    tableName:"Entrevistas",
  });

  Entrevista.associate = function(models) {
    
    Entrevista.belongsTo(models.Seguimiento, {
      as: "seguimiento",
      foreignKey: "seguimiento_id",
    });
  };
  Seguimiento.associate = function(models) {
    
    Seguimiento.belongsTo(models.Persona, {
      as: "orientador",
      foreignKey: "orientador_id",
    });
  };
  return Entrevista;
};
