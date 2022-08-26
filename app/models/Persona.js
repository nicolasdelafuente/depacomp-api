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
      as: "rol",
      foreignKey: "rol_id",
    });

    Persona.belongsTo(models.Genero, {
      as: "genero",
      foreignKey: "genero_id",
    });

    Persona.belongsTo(models.DocumentoTipo, {
      as: "documento__id",
      foreignKey: "documento_id",
    });

    Persona.belongsTo(models.Localidad, {
      as: "localidad",
      foreignKey: "localidad_id",
    });

    Persona.belongsTo(models.Provincia, {
      as: "provincia",
      foreignKey: "provincia_id",
    });

    Persona.belongsTo(models.Pais, {
      as: "pais",
      foreignKey: "pais_id",
    });

  };

  return Persona;
};