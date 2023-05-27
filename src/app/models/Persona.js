'use strict';

module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Persona', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    documento: DataTypes.STRING
  }, {
    tableName:"Personas",
  });

  Persona.associate = function(models) {

    Persona.belongsTo(models.Rol, {
      as: "Rol",
      foreignKey: "rol_id",
    });

    Persona.belongsTo(models.Genero, {
      as: "Genero",
      foreignKey: "genero_id",
    });

    Persona.belongsTo(models.DocumentoTipo, {
      as: "DocumentoTipo",
      foreignKey: "documento_id",
    });

    Persona.belongsTo(models.Localidad, {
      as: "Localidad",
      foreignKey: "localidad_id",
    });

    Persona.belongsTo(models.Provincia, {
      as: "Provincia",
      foreignKey: "provincia_id",
    });

    Persona.belongsTo(models.Pais, {
      as: "Pais",
      foreignKey: "pais_id",
    });

  };

  return Persona;
};
