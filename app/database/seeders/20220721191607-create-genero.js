'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Femenino', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Masculino', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Ninguno', created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('generos', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('generos', null, {});
    
  }
};
