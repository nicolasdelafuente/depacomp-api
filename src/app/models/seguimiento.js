'use strict';

module.exports = (sequelize, DataTypes) => {
  const Seguimiento = sequelize.define('Seguimiento', {
    motivo: DataTypes.STRING,
    orientador_id: DataTypes.INTEGER
  }, {
    tableName:"Seguimientos",
  });

  Seguimiento.associate = function(models) {

    Seguimiento.belongsTo(models.SeguimientoTipo, {
      foreignKey: "seguimiento_tipo_id",
    });

    Seguimiento.belongsTo(models.Categoria, {
      foreignKey: "categoria_id",
    });

    Seguimiento.belongsTo(models.Estado, {
      foreignKey: "estado_id",
    });

    Seguimiento.hasMany(models.Entrevista, {
      foreignKey: "entrevista_id",
    });

    Seguimiento.belongsTo(models.Persona, {
      as: "entrevistador",
      foreignKey: "id",
    });

    Seguimiento.belongsTo(models.Persona, {
      as: "derivador",
      foreignKey: "id",
    });

    Seguimiento.belongsTo(models.Persona, {
      as: "entrevistado",
      foreignKey: "id",
    });
  };

  return Seguimiento;
};