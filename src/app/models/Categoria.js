'use strict';

module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    nombre: DataTypes.STRING
  }, {
    tableName:"Categorias",
  });

  Categoria.associate = function(models) {
    
    Categoria.hasMany(models.Seguimiento, {
      as: "categoria",
      foreignKey: "categoria_id",
    });

  };

  return Categoria;
};
