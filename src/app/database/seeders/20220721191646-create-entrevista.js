'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        {
          observaciones: "observaciones_1:",
          acciones: "acciones_1:",
          seguimiento_id: 1,
          entrevistador_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          observaciones: "observaciones_2:",
          acciones: "acciones_2:",
          seguimiento_id: 2,
          entrevistador_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          observaciones: "observaciones_3:",
          acciones: "acciones_3:",
          seguimiento_id: 2,
          entrevistador_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          observaciones: "observaciones_4:",
          acciones: "acciones_4:",
          seguimiento_id: 2,
          entrevistador_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        }
      ];

      return queryInterface.bulkInsert('Entrevistas', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Entrevistas', null, {});
    
  }
};
