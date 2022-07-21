'use strict';

module.exports = (sequelize, DataTypes) => {
  const Seguimiento = sequelize.define('Seguimiento', {
    nombre: DataTypes.STRING,
    motivo: DataTypes.STRING
  }, {
    tableName:"seguimientos",
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
    
    Seguimiento.belongsToMany(models.Persona, {
      through: 'persona_seguimiento'
    });


  };

  return Seguimiento;
};