'use strict';

module.exports = (sequelize, DataTypes) => {
  const DocumentoTipo = sequelize.define('DocumentoTipo', {
    nombre: DataTypes.STRING
  }, {
    tableName:"DocumentoTipos",
  });

  DocumentoTipo.associate = function(models) {
    
    DocumentoTipo.hasMany(models.Persona, {
      as: "documentoTipo",
      foreignKey: "documento_id",
    });

  };
  
  return DocumentoTipo;
};
