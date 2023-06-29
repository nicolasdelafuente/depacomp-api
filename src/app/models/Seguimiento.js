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
      as: "seguimientoTipo",
      foreignKey: "seguimiento_tipo_id",
    });

    Seguimiento.belongsTo(models.Categoria, {
      as: "categoria",
      foreignKey: "categoria_id",
    });

    Seguimiento.belongsTo(models.Estado, {
      as: "estado",
      foreignKey: "estado_id",
    });

    Seguimiento.hasMany(models.Entrevista, {
      as: "entrevista",
      foreignKey: "entrevista_id",
    });

    Seguimiento.belongsTo(models.Persona, {
      as: "orientador",
      foreignKey: "orientador_id",
    });

    Seguimiento.belongsTo(models.Persona, {
      as: "derivador",
      foreignKey: "derivador_id",
    });

    Seguimiento.belongsTo(models.Persona, {
      as: "orientado",
      foreignKey: "orientado_id",
    });
  };

  return Seguimiento;
};
