'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Femenino', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Masculino', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Ninguno', created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('Generos', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Generos', null, {});
    
  }
};
