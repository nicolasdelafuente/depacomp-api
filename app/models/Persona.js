'use strict';

module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Persona', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    documento: DataTypes.STRING
  }, {
    tableName:"personas",
  });

  Persona.associate = function(models) {
    
    Persona.belongsTo(models.Rol, {
      foreignKey: "rol_id",
    });

    Persona.belongsTo(models.Genero, {
      foreignKey: "genero_id",
    });

    Persona.belongsTo(models.Pais, {
      foreignKey: "documento_tipo",
    });

    Persona.belongsTo(models.Localidad, {
      foreignKey: "localidad_id",
    });

    Persona.belongsTo(models.Provincia, {
      foreignKey: "provincia_id",
    });

    Persona.belongsTo(models.Pais, {
      foreignKey: "pais_id",
    });

    Persona.belongsToMany(models.Seguimiento, { through: 'persona_seguimiento' });

  };

  return Persona;
};