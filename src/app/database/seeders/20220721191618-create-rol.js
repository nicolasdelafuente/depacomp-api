'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Administrador', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Orientador', created_at: new Date(), updated_at: new Date() },
        { nombre: 'usuario', created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('Roles', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Roles', null, {});
    
  }
};
