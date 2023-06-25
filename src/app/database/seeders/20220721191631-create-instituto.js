'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Instituto de Biotecnología', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Instituto de Educación', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Instituto de Salud Comunitaria', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Instituto de Tecnología e Ingenieria', created_at: new Date(), updated_at: new Date() },
        { nombre: 'El usuario no forma parte de un Instituto', created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('Institutos', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Institutos', null, {});
    
  }
};
