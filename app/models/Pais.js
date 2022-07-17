'use strict';

module.exports = (sequelize, DataTypes) => {
  const pais = sequelize.define('pais', {
    nombre: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    iso: DataTypes.STRING
  }, {
    tableName: "paises"
  });

  pais.associate = function(models) {
    pais.hasMany(models.persona, {
      foreignKey: 'id',
    });
    models.persona.belongsTo(pais, {
      as:'pais_',
    });
  };
  
  return pais;
};