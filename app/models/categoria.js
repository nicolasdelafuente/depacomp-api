'use strict';

module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    nombre: DataTypes.STRING
  }, {
    tableName:"categorias",
  });

  Categoria.associate = function(models) {
    
    Categoria.hasMany(models.Seguimiento, {
      foreignKey: "categoria_id",
    });

  };

  return Categoria;
};