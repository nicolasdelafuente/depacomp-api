'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Entrevista', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Contacto Por email-Telefono', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Entrevista con docentes', created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('SeguimientoTipos', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('SeguimientoTipos', null, {});
    
  }
};
