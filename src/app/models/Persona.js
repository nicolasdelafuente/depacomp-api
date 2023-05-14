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
      foreignKey: "id",
    });

    Persona.belongsTo(models.Genero, {
      as: "Genero",
      foreignKey: "id",
    });

    Persona.belongsTo(models.DocumentoTipo, {
      as: "DocumentoTipo",
      foreignKey: "id",
    });

    Persona.belongsTo(models.Localidad, {
      as: "Localidad",
      foreignKey: "id",
    });

    Persona.belongsTo(models.Provincia, {
      as: "Provincia",
      foreignKey: "id",
    });

    Persona.belongsTo(models.Pais, {
      as: "Pais",
      foreignKey: "id",
    });

  };

  return Persona;
};
