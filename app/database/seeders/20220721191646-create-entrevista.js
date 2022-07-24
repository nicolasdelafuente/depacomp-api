'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        {
          observaciones: "observaciones_1:",
          acciones: "acciones_2:",
          seguimiento_id: 1,
        }
      ];

      return queryInterface.bulkInsert('entrevistas', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('entrevistas', null, {});
    
  }
};
