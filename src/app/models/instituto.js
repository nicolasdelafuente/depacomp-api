'use strict';

module.exports = (sequelize, DataTypes) => {
  const Instituto = sequelize.define('Instituto', {
    nombre: DataTypes.STRING
  }, {
    tableName:"Institutos",
  });

  Instituto.associate = function(models) {
    // associations can be defined here
  };
  
  return Instituto;
};