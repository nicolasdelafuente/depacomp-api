'use strict';

module.exports = (sequelize, DataTypes) => {
  const Entrevista = sequelize.define('Entrevista', {
    observaciones: DataTypes.STRING,
    acciones: DataTypes.STRING
  }, {
    tableName:"Entrevistas",
  });

  Entrevista.associate = function(models) {
    
    Entrevista.belongsTo(models.Seguimiento, {
      foreignKey: "seguimiento_id",
    });

    //Seguimiento.belongsTo(models.Persona, {
    //  as: "entrevistador",
    //  foreignKey: "id",
    //});

  };

  return Entrevista;
};
