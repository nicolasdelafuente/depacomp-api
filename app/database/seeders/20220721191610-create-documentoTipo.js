'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'DNI' },
        { nombre: 'DU' },
        { nombre: 'Pasaporte' },
      ];

      return queryInterface.bulkInsert('documentos_tipo', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('documentos_tipo', null, {});
    
  }
};
