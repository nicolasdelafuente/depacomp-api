'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'DNI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'DU', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Pasaporte', created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('documentotipos', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('documentotipos', null, {});
    
  }
};
