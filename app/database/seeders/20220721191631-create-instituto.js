'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Instituto de Biotecnología' },
        { nombre: 'Instituto de Educación' },
        { nombre: 'Instituto de Salud Comunitaria' },
        { nombre: 'Instituto de Tecnología e Ingenieria' },
      ];

      return queryInterface.bulkInsert('institutos', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('institutos', null, {});
    
  }
};
