'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Administrador' },
        { nombre: 'Orientador' },
        { nombre: 'usuario' },
      ];

      return queryInterface.bulkInsert('roles', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('roles', null, {});
    
  }
};
