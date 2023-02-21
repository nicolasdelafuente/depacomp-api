'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Discapacidad', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Salud Mental', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Salud Fisica', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Tecnología', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Pedagogía', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Re-Orientación Vocacional', created_at: new Date(), updated_at: new Date() },
      ];

      return queryInterface.bulkInsert('categorias', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('categorias', null, {});
    
  }
};
