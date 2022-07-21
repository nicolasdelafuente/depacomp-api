'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Femenino' },
        { nombre: 'Masculino' },
        { nombre: 'Ninguno' },
      ];

      return queryInterface.bulkInsert('generos', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('generos', null, {});
    
  }
};
