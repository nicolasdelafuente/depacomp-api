'use strict';

module.exports = (sequelize, DataTypes) => {
  const DocumentoTipo = sequelize.define('DocumentoTipo', {
    nombre: DataTypes.STRING
  }, {
    tableName:"documentos_tipo",
  });

  DocumentoTipo.associate = function(models) {
    
    DocumentoTipo.hasMany(models.Persona, {
      foreignKey: "documento_tipo_id",
    });

  };
  
  return DocumentoTipo;
};